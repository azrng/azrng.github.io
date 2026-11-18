/**
 * 书签站共享工具：md 条目解析、首字母色块配色
 */

/** 解析一行 “- [标题](url) #标签 备注” → { title, url, desc, tags }；解析失败返回 null（兼容 CRLF 行尾） */
export function parseEntry(line) {
  const m = line.match(/^\s*-\s+\[([^\]]*)\]\((\S+?)\)(?:\s+(.*?))?\s*$/);
  if (!m) return null;
  const tags = [];
  const rest = [];
  for (const tok of (m[3] || '').split(/\s+/).filter(Boolean)) {
    // 纯数字（如标题里的 #1、#15885）不是标签，保留为备注原文
    if (/^#[\p{L}\p{N}]+$/u.test(tok) && /[^\p{N}]/u.test(tok.slice(1))) tags.push(tok.slice(1));
    else rest.push(tok);
  }
  return { title: m[1].trim(), url: m[2], desc: rest.join(' ').trim(), tags };
}

/** URL → 自动标签：GitHub/Gitee 仓库主页或 releases 页识别为开源项目（无需手写 #开源） */
export function autoTags(url) {
  try {
    const u = new URL(url);
    if (u.hostname !== 'github.com' && u.hostname !== 'gitee.com') return [];
    const parts = u.pathname.split('/').filter(Boolean);
    if (parts.length < 2) return [];
    if (parts.length === 2 || parts[2] === 'releases') return ['开源'];
    return [];
  } catch {
    return [];
  }
}

/** 从 “### 名称” 分组行取分组名（兼容 CRLF 行尾） */
export function parseGroup(line) {
  const m = line.match(/^###\s+(.+?)\s*$/);
  return m ? m[1].trim() : null;
}

/** URL → 域名首字母（大写；非字母取域名首字符） */
export function hostLetter(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    const ch = [...host][0] || '#';
    return /[a-z]/i.test(ch) ? ch.toUpperCase() : ch;
  } catch {
    return '#';
  }
}

/** 域名 → 稳定的 HSL 色相（hash 域名），生成首字母色块背景 */
export function hostHue(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    let h = 0;
    for (let i = 0; i < host.length; i++) h = (h * 31 + host.charCodeAt(i)) >>> 0;
    return h % 360;
  } catch {
    return 210;
  }
}
