#!/usr/bin/env node
/**
 * 书签标题回填：标题是纯域名（或占位词）的书签，抓取页面 <title> 后回写 md
 *
 * 用法：
 *   node scripts/fetch-titles.mjs                # 预览（不写文件）
 *   node scripts/fetch-titles.mjs --write        # 实际回写 md
 *   node scripts/fetch-titles.mjs --proxy=http://127.0.0.1:7890
 *   node scripts/fetch-titles.mjs --only=cnblogs.com,gitee.com   # 只抓这些域名
 *   npm run fetch:titles -- --write
 *
 * 规则：
 *  - 命中条件：标题去掉 www. 后 == 主机名，或标题 ∈ 占位词表（点击此处/首页…）
 *  - 抓取：GET 页面，解析第一个 <title>（跟随跳转，UA 伪装浏览器）
 *  - GitHub 仓库/用户页走 api.github.com（页面反爬不稳，API 信息更准）
 *  - 抓到 404/超时/无 title → 保持原状，记入报告（不猜测标题）
 *  - 页面 title 与域名相同（站点首页类）→ 保持原状
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'src', 'content', 'navs');

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const arg = (name) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(`--${name}=`.length) : undefined;
};
const PROXY = arg('proxy') || process.env.HTTPS_PROXY || process.env.https_proxy || '';
const ONLY = arg('only') ? arg('only').split(',').map((s) => s.trim().toLowerCase()) : null;
const CONCURRENCY = 10;
const TIMEOUT = 15000;

const PLACEHOLDER_TITLES = new Set([
  '点击此处', '点击这里', '首页', '主页', 'home', 'index', 'link', '链接',
  'untitled', '无标题', 'new tab', '书签', 'bookmark', 'here', 'click here',
]);

const CURL = process.env.CURL_PATH || 'curl';

/** 用 curl 子进程 GET（--proxy 兼容 HTTP/SOCKS 代理与各类 TLS 指纹拦截），resolve({ status, location, body }) */
function get(url) {
  return new Promise((resolve, reject) => {
    const argv = [
      '-sS', '-L', '--max-redirs', '5',
      '--max-time', String(Math.ceil(TIMEOUT / 1000)),
      '--compressed',
      '-A', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
      '-H', 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      '-H', 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8',
      '-H', `Referer: ${new URL(url).origin}/`,
      // 输出头与主体用 \r\n 分隔，避免与页面内容混淆；错误页(4xx/5xx)也返回 body
      '-w', '\\n---STATUS---%{http_code}---FINALURL---%{url_effective}',
    ];
    if (PROXY) argv.push('-x', PROXY);
    argv.push(url);
    execFile(CURL, argv, { timeout: TIMEOUT + 5000, maxBuffer: 4 * 1024 * 1024, encoding: 'buffer' }, (err, stdout, stderr) => {
      const text = stdout.toString('latin1');
      const m = text.match(/\n---STATUS---(\d+)---FINALURL---(.*)\r?\n?$/);
      if (!m) {
        const msg = err ? `${err.message}`.replace(/^Command failed.*?curl[^:]*:\s*/i, '') : 'no-response';
        return reject(new Error(String(stderr || msg).trim().split('\n')[0].slice(0, 60) || 'no-response'));
      }
      resolve({ status: +m[1], location: m[2], body: stdout.subarray(0, stdout.length - m[0].length) });
    });
  });
}

/** 状态码 + 主体（错误页也要 body 才能取 title）→ 标题或 null */
function extractTitle(res) {
  const body = res.body;
  if (!body.length) return null;
  // charset：header > meta 声明 > 默认 utf8；GBK 站点（老 CSDN 等）需要转码
  const head = body.subarray(0, 2048).toString('latin1');
  let charset = (res.location ? '' : (head.match(/charset=["']?([\w-]+)/i) || [])[1] || '').toLowerCase();
  let text = null;
  for (const cs of [charset || 'utf8', 'utf8', 'gbk']) {
    try {
      text = new TextDecoder(cs).decode(body);
      if (!/\uFFFD/.test(text.slice(0, 4000))) break;
    } catch { /* Node 未编译该编码（如 gbk）时退回 utf8 */ }
  }
  if (text === null) text = body.toString('utf8');
  const decode = (s) => s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => { try { return String.fromCodePoint(+n); } catch { return ''; } })
    .replace(/\s+/g, ' ').trim();
  // <title> 优先（非空才用）；微信文章页 <title> 为空但有 og:title，逐级回退
  const candidates = [
    text.match(/<title[^>]*>([\s\S]*?)<\/title>/i),
    text.match(/property=["']og:title["'][^>]*content=["']([^"']+)["']/i)
      || text.match(/content=["']([^"']+)["'][^>]*property=["']og:title["']/i),
    text.match(/name=["']twitter:title["'][^>]*content=["']([^"']+)["']/i),
  ];
  for (const m of candidates) {
    if (!m) continue;
    const t = decode(m[1]);
    if (t) return t;
  }
  return null;
}

/** GitHub 仓库 / 用户页标题（API 拿 description 与登录名，比网页 title 稳定）；限流时 throw，由调用方退回网页抓取 */
async function githubTitle(u) {
  const p = new URL(u).pathname.replace(/^\/+|\/+$/g, '');
  const seg = p.split('/');
  if (!seg[0] || ['settings', 'features', 'pricing', 'topics', 'about', 'orgs'].includes(seg[0])) return null;
  if (!seg[1] || ['repositories', 'tabs'].includes(seg[1]) || seg[1].startsWith('?')) {
    const r = await get(`https://api.github.com/users/${seg[0]}`);
    if (r.status === 403 || r.status === 429) throw new Error('gh-rate-limit');
    if (r.status !== 200) return null;
    const j = JSON.parse(r.body.toString('utf8'));
    return j.name || j.login || null;
  }
  const r = await get(`https://api.github.com/repos/${seg[0]}/${seg[1]}`);
  if (r.status === 403 || r.status === 429) throw new Error('gh-rate-limit');
  if (r.status !== 200) return null;
  const j = JSON.parse(r.body.toString('utf8'));
  return j.description ? `${j.name} - ${j.description}` : j.full_name;
}

/** 清洗 github.com 网页 title：去 “GitHub - owner/repo: ” 前缀与 “ · GitHub” 尾巴 */
function cleanGithubPageTitle(t) {
  return t
    .replace(/^GitHub - [\w.-]+\/[\w.-]+: /, '')
    .replace(/^(Releases?|Tags?|Issues|Pull requests|Actions|Wiki|Discussions) · ([\w.-]+\/[\w.-]+)( · GitHub)?$/i, '$2 $1')
    .replace(/ · GitHub$/, '');
}

// ===== 主流程 =====

/** 标题是否为“域名占位”（去 www. 后 == 完整主机名；单词品牌名如 Ventoy 是有效标题） */
function isDomainTitle(title, host) {
  const t = title.toLowerCase();
  return t === host || t === `www.${host}`;
}

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.md'));
const entries = []; // { file, title, url, host, gh }
for (const f of files) {
  const lines = fs.readFileSync(path.join(DIR, f), 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    const m = line.match(/^(\s*-\s+)\[([^\]]*)\]\((\S+?)\)((?:\s+.*)?)$/);
    if (!m) return;
    const title = m[2].trim();
    let host = '';
    try { host = new URL(m[3]).hostname.replace(/^www\./, ''); } catch { return; }
    if (PLACEHOLDER_TITLES.has(title.toLowerCase()) || isDomainTitle(title, host)) {
      entries.push({ file: f, idx: i, indent: m[1], title, url: m[3], tail: m[4], host, gh: host === 'github.com' });
    }
  });
}

const targets = ONLY ? entries.filter((e) => ONLY.some((d) => e.host === d || e.host.endsWith(`.${d}`))) : entries;
console.log(`命中 ${targets.length} 条待回填（共扫描 ${entries.length} 条域名标题）\n`);

const byUrl = new Map();
for (const e of targets) if (!byUrl.has(e.url)) byUrl.set(e.url, e);
const urls = [...byUrl.values()];

const results = new Map(); // url → { title } | { error }
let cursor = 0;
async function worker() {
  while (cursor < urls.length) {
    const e = urls[cursor++];
    try {
      let t = e.gh ? await githubTitle(e.url).catch((err) => (err.message === 'gh-rate-limit' ? undefined : null)) : null;
      if (t === undefined) {
        // API 限流：退回网页抓取（老版 GitHub 页面也有完整 title）
        await new Promise((r) => setTimeout(r, 2000));
        t = null;
      }
      const fetched = t || extractTitle(await get(e.url));
      const final = fetched && e.gh ? cleanGithubPageTitle(fetched) : fetched;
      if (!final) results.set(e.url, { error: 'no-title' });
      else if (isDomainTitle(final, e.host)) results.set(e.url, { error: 'title-is-domain' });
      else results.set(e.url, { title: final });
    } catch (err) {
      results.set(e.url, { error: err.message === 'timeout' ? 'timeout' : `fetch:${err.message.slice(0, 40)}` });
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

// ===== 回写 =====
const fileLines = new Map();
for (const f of files) fileLines.set(f, fs.readFileSync(path.join(DIR, f), 'utf8').split(/\r?\n/));

let changed = 0;
const failed = [];
for (const e of targets) {
  const r = results.get(e.url);
  if (!r || !r.title) { failed.push([e, r ? r.error : 'unknown']); continue; }
  const clean = r.title.replace(/\[/g, '（').replace(/\]/g, '）');
  if (clean === e.title) { failed.push([e, 'same-as-current']); continue; }
  const lines = fileLines.get(e.file);
  const line = lines[e.idx];
  const m2 = line.match(/^(\s*-\s+)\[([^\]]*)\]\((\S+?)\)((?:\s+.*)?)$/);
  if (!m2 || m2[3] !== e.url) { failed.push([e, 'line-drift']); continue; } // 文件被并发改动过，跳过
  lines[e.idx] = `${m2[1]}[${clean}](${m2[3]})${m2[4]}`;
  changed++;
}

if (WRITE) {
  for (const [f, lines] of fileLines) fs.writeFileSync(path.join(DIR, f), lines.join('\n') + '\n', 'utf8');
  console.log(`✅ 已回写 ${changed} 条标题`);
} else {
  console.log(`（预览模式，命中可回写 ${changed} 条；加 --write 生效）`);
}
console.log('\n—— 抓取结果预览 ——');
for (const e of targets) {
  const r = results.get(e.url);
  console.log(r && r.title ? `[${e.file}] ${e.title} → ${r.title}` : `[${e.file}] ${e.title}  ✗ ${r ? r.error : '?'}`);
}
if (failed.length) {
  console.log(`\n⚠️ ${failed.length} 条未能回填：`);
  for (const [e, why] of failed) console.log(`  ${why.padEnd(16)} ${e.title}  ${e.url}`);
}
