#!/usr/bin/env node
/**
 * 浏览器书签导出（Netscape Bookmark HTML）→ 书签站分类 md
 *
 * 用法：
 *   node scripts/import.mjs <导出1.html> [导出2.html ...]
 *   npm run import:bookmarks -- <文件...>
 *
 * 规则：
 *  - 每个一级文件夹 → src/content/navs/<分类名>.md（frontmatter: title/order/icon-hint）
 *  - 二级及更深文件夹 → 文件内 “### 子分组”；超过两层时中间层级用 “名称 · 名称” 拼接
 *  - 跨文件、跨文件夹按规范化 URL 去重（忽略末尾斜杠与大小写），首见保留
 *  - 已存在的同名分类 md 会被跳过（不覆盖），想重新生成请先删掉对应文件
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'src', 'content', 'navs');

const norm = (url) => url.trim().replace(/\/+$/, '').toLowerCase();

/** 解析 Netscape 书签文件为 { folders: [{ name, children, groups }], loose: [] } */
function parseBookmarks(html) {
  const lines = html.split(/\r?\n/);
  const root = { name: '', folders: [], links: [] };
  const stack = [root];

  for (const line of lines) {
    const folderMatch = line.match(/^\s*<DT><H3[^>]*>([^<]+)<\/H3>/i);
    if (folderMatch) {
      const indent = line.match(/^\s*/)[0].length;
      while (stack.length > 1 && stack[stack.length - 1].indent >= indent) stack.pop();
      const folder = { name: folderMatch[1].trim(), indent, folders: [], links: [] };
      stack[stack.length - 1].folders.push(folder);
      stack.push(folder);
      continue;
    }
    const linkMatch = line.match(/^\s*<DT><A\s+HREF="([^"]*)"[^>]*>([^<]*)<\/A>/i);
    if (linkMatch) {
      const indent = line.match(/^\s*/)[0].length;
      while (stack.length > 1 && stack[stack.length - 1].indent > indent) stack.pop();
      stack[stack.length - 1].links.push({ url: linkMatch[1].trim(), title: decode(linkMatch[2]) });
    }
  }
  return root;
}

/** HTML 实体解码（书签标题常见 &amp; &lt; 等） */
function decode(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
/** 递归收集：一级文件夹为分类，更深层折叠为 “父 · 子” 分组名 */
function collect(folder, parentPath, categories, seen, deduped) {
  const display = parentPath ? `${parentPath} · ${folder.name}` : folder.name;
  if (parentPath === '') {
    // 一级文件夹 → 分类
    categories.push({ title: folder.name, groups: [], links: [], order: null });
    for (const sub of folder.folders) collect(sub, folder.name, categories, seen, deduped);
    appendLinks(categories[categories.length - 1], '', folder.links, seen, deduped);
  } else {
    const cat = categories[categories.length - 1];
    const groupName = parentPath === cat.title ? folder.name : display;
    const group = { name: groupName, links: [] };
    appendLinks(group, groupName, folder.links, seen, deduped);
    for (const sub of folder.folders) collect(sub, display, categories, seen, deduped);
    if (group.links.length) cat.groups.push(group);
  }
}

function appendLinks(target, _gname, links, seen, deduped) {
  for (const link of links) {
    if (!/^https?:\/\//i.test(link.url)) continue;
    const key = norm(link.url);
    if (seen.has(key)) {
      deduped.count++;
      continue;
    }
    seen.add(key);
    target.links.push(link);
  }
}

/** 清洗标题：压缩空白、方括号换全角（避免破坏 md 链接语法） */
function cleanTitle(t) {
  return t.replace(/\s+/g, ' ').replace(/\[/g, '（').replace(/\]/g, '）').trim();
}

/** 分类文件名（含中文安全） */
function fileName(title) {
  return title.replace(/[\\/:*?"<>|#^[\]]/g, '') + '.md';
}

// ===== 主流程 =====
const files = process.argv.slice(2).filter((a) => !a.startsWith('-'));
if (!files.length) {
  console.error('用法: node scripts/import.mjs <bookmarks.html> [more.html ...]');
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const seen = new Set();
const deduped = { count: 0 };
const categories = [];

for (const file of files) {
  const html = fs.readFileSync(path.resolve(file), 'utf8');
  const root = parseBookmarks(html);
  // Netscape 根下的第一个文件夹通常是 “收藏栏/收藏夹栏”
  for (const top of root.folders) {
    for (const cat of top.folders) collect(cat, '', categories, seen, deduped);
    // 收藏栏根上的散链归入 “其他”
    if (top.links.length) {
      let misc = categories.find((c) => c.title === '其他');
      if (!misc) {
        misc = { title: '其他', groups: [], links: [], order: null };
        categories.push(misc);
      }
      appendLinks(misc, '', top.links, seen, deduped);
    }
  }
}

// 首见分类顺序即 order；重复 title 合并（不同导出文件里同名一级文件夹）
const merged = new Map();
for (const [i, cat] of categories.entries()) {
  if (merged.has(cat.title)) {
    merged.get(cat.title).groups.push(...cat.groups);
    merged.get(cat.title).links.push(...cat.links);
  } else {
    merged.set(cat.title, { ...cat, order: i + 1 });
  }
}

let written = 0, total = 0, skipped = 0;
for (const cat of merged.values()) {
  const fpath = path.join(OUT_DIR, fileName(cat.title));
  if (fs.existsSync(fpath)) {
    skipped++;
    continue;
  }
  const lines = [
    '---',
    `title: ${JSON.stringify(cat.title)}`,
    `order: ${cat.order}`,
    '---',
    '',
  ];
  // 无子分组的直挂链接先输出
  for (const link of cat.links) {
    lines.push(`- [${cleanTitle(link.title) || link.url}](${link.url})`);
  }
  for (const group of cat.groups) {
    if (!group.links.length) continue;
    lines.push('', `### ${group.name}`, '');
    for (const link of group.links) {
      lines.push(`- [${cleanTitle(link.title) || link.url}](${link.url})`);
    }
  }
  fs.writeFileSync(fpath, lines.join('\n') + '\n', 'utf8');
  written++;
  total += cat.links.length + cat.groups.reduce((n, g) => n + g.links.length, 0);
}

console.log(`✅ 导入完成：${written} 个分类文件、${total} 条书签`);
if (deduped.count) console.log(`🧹 去重丢弃 ${deduped.count} 条重复 URL`);
if (skipped) console.log(`⏭️  跳过 ${skipped} 个已存在的分类文件（重新生成请先删除）`);
