# azrng.github.io

个人根站点仓库（Astro 项目）。

- `/` —— 手写静态主页（`public/index.html` + `public/css|js|fonts|images`），无构建步骤，直接编辑即可
- `/navs/` —— 私人书签导航站（`src/pages/navs.astro`），数据源 `src/content/navs/*.md`

## 维护书签（日常）

在 GitHub 网页上编辑 `src/content/navs/` 下的分类 md → commit，Actions 自动构建部署，几分钟后生效。

md 格式：

```markdown
---
title: "开发"
order: 3
---

### 子分组（可选）

- [标题](https://example.com) 一句话备注（可选）
```

- `title`：分类名；`order`：显示顺序（小的在前）
- 新建一个 md = 新增一个分类；文件内 `###` 为子分组
- 首字母色块图标由域名自动生成，无需配置

## 修改访问密码

`/navs/` 的门面密码以 SHA-256 哈希存放在 `src/pages/navs.astro` 的 `PASSWORD_SHA256`。替换密码：

```bash
node -e "crypto.subtle.digest('SHA-256', new TextEncoder().encode('你的新密码')).then(b => console.log(Array.from(new Uint8Array(b), x => x.toString(16).padStart(2,'0')).join('')))"
```

把输出的哈希填进 `PASSWORD_SHA256` 并 commit。当前占位密码：`azrng2088`。

> 注意：这是门面密码，防小白不防懂行的人——书签数据仍以明文构建在 HTML 里，仓库也是公开的。真要保密请自行改为构建期加密方案。

## 从浏览器书签导入

```bash
npm run import:bookmarks -- path/to/bookmarks.html [more.html ...]
```

按一级文件夹生成分类 md（二级以下折叠为 `###` 子分组），跨文件按 URL 去重；已存在的同名分类文件会被跳过。

## 回填域名标题

导入的书签里如果标题只是域名（如 `cnblogs.com`），可抓取页面真实标题回填：

```bash
npm run fetch:titles                 # 预览，不改文件
npm run fetch:titles -- --write      # 实际回写 md
npm run fetch:titles -- --only=cnblogs.com --write   # 只处理某些域名
npm run fetch:titles -- --proxy=http://127.0.0.1:7890 --write   # 走代理（抓 GitHub 必需）
```

- GitHub 仓库走 api.github.com（未认证限流 60 次/小时，超出自动退回网页抓取）
- 抓取失败（404/超时/反爬/页面无标题）的条目保持原状并打印清单，可重跑增量补齐

## 本地开发

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # 产物在 dist/
npm run preview
```

## 部署

push 到 `main` 即触发 `.github/workflows/deploy.yml`（withastro/action 构建并部署 GitHub Pages）。
