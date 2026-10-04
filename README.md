# 我的博客（0 成本 · 免费子域名版）

一个极简「作家博客」模板，风格参考 caitflanders.com：米白底、衬线大标题、大量留白。
用 [Astro](https://astro.build) 构建，可免费部署到 **GitHub Pages**，网址形如：

```
https://你的用户名.github.io
```

全程 **0 成本**，不需要买服务器，也不需要买域名。

---

## 一、目录结构

```
astro-blog/
├── astro.config.mjs          # 部署地址配置（要用你的用户名改一下）
├── package.json
├── public/
│   ├── favicon.svg           # 网站图标
│   └── .nojekyll
├── src/
│   ├── consts.ts             # ★ 站点信息：标题、导航、社交链接（最常改）
│   ├── content.config.ts     # 文章的字段定义
│   ├── content/posts/        # ★ 所有文章（Markdown 文件）放这里
│   ├── styles/global.css     # 全站样式（配色、字体、排版）
│   ├── layouts/BaseLayout.astro
│   ├── components/           # Header / Footer / PostCard
│   └── pages/
│       ├── index.astro       # 首页
│       ├── about.astro       # 关于页
│       ├── rss.xml.js        # RSS 订阅
│       └── blog/
│           ├── index.astro   # 文章列表页
│           └── [...slug].astro # 文章详情页
└── .github/workflows/deploy.yml  # 自动部署脚本（不用改）
```

---

## 二、本地预览（可选，想先看看效果再做）

需要先装 [Node.js](https://nodejs.org)（18 以上）。

```bash
cd astro-blog
npm install       # 第一次需要，联网下载依赖
npm run dev       # 打开 http://localhost:4321
```

构建正式版本：

```bash
npm run build     # 产物在 dist/ 目录
```

> 不想在本地折腾？可以直接跳到第三步，把代码传到 GitHub，由 GitHub 免费帮你构建。

---

## 三、部署到 GitHub Pages（免费子域名）

### 1. 注册 GitHub
去 <https://github.com> 注册一个账号，记住你的**用户名**。

### 2. 新建仓库
- 点右上角 `+` → **New repository**
- **Repository name 填：`你的用户名.github.io`**（⚠️ 必须完全一致，例如用户名是 tom，就填 `tom.github.io`）
- 选 **Public**，点 **Create repository**

> 这样命名后，网站地址就是 `https://你的用户名.github.io`，无需任何额外配置。

### 3. 上传代码
**方式 A（网页上传，推荐给不熟悉命令行的你）**
- 进入刚建好的仓库，点 **Add file → Upload files**
- 把 `astro-blog` 里的**所有文件和文件夹**拖进去（注意：`node_modules` 和 `dist` 不要上传）
- 下方点 **Commit changes**

**方式 B（用 Git 命令行）**
```bash
cd astro-blog
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

### 4. 改一处配置（重要）
打开 `astro.config.mjs`，把 `YOUR-USERNAME` 换成你的用户名：

```js
export default defineConfig({
  site: 'https://你的用户名.github.io',
  base: '/',
});
```

同时把 `src/consts.ts` 里的 `url` 也改成同一个地址。改完提交一次。

### 5. 开启 Pages
- 仓库 **Settings → Pages**
- **Build and deployment → Source** 选 **GitHub Actions**

### 6. 等待发布
- 仓库上方 **Actions** 标签页能看到构建进度，第一次约 1–2 分钟
- 变成绿色 ✅ 后，访问 `https://你的用户名.github.io` 即可

---

## 四、日常使用：如何改内容

### 改站点信息（名字、导航、社交链接）
编辑 `src/consts.ts`：

```ts
export const SITE = {
  title: '你的名字',
  description: '一句话简介……',
  author: '你的名字',
  url: 'https://你的用户名.github.io',
  nav: [ /* 导航项 */ ],
  social: {
    instagram: 'https://www.instagram.com/你的账号',
    email: '你的邮箱',
  },
};
```

### 写一篇新文章
在 `src/content/posts/` 下新建一个 `.md` 文件，例如 `my-first-post.md`：

```markdown
---
title: 文章标题
description: 一句话摘要，会显示在列表页
pubDate: 2026-10-04
featured: true
tags: ['随笔']
---

这里开始写正文，支持 **加粗**、*斜体*、列表、引用、图片等标准 Markdown 语法。

## 小标题

> 一段引用。
```

- 文件名会变成网址：`/blog/my-first-post/`
- 存盘并提交到 GitHub，网站会自动更新
- `featured: true` 的会被首页优先展示

### 改「关于」页
编辑 `src/pages/about.astro` 里的文字即可。

### 换配色 / 字体
编辑 `src/styles/global.css` 顶部的 `:root` 变量：

```css
--bg: #faf7f1;       /* 背景色 */
--accent: #a86a45;   /* 强调色（按钮、链接） */
--font-display: ...; /* 标题字体 */
```

### 换首页的「照片」占位块
目前首页和关于页的位置用了一个渐变色块占位。想放真实照片：
1. 把图片放到 `public/` 目录，例如 `public/me.jpg`
2. 在 `src/pages/index.astro` 里，把
   `<div class="about-teaser__photo"></div>`
   替换为
   `<img src={`${base}/me.jpg`} alt="我的照片" class="about-teaser__photo" />`

---

## 五、常见问题

**Q：网址打开是空白 / 样式丢失？**
多半是 `base` 配错了。用「仓库名 = 用户名.github.io」的方式，`base` 保持 `'/'` 即可。

**Q：想用自定义域名（如 yourname.com）？**
在仓库 Settings → Pages → Custom domain 里填域名，并在域名服务商处按提示配置 DNS。域名本身需另购（约 ¥60–120/年），托管仍然免费。

**Q：可以完全不加域名吗？**
可以，本文方案就是用 GitHub 免费送的 `你的用户名.github.io`。

**Q：想加邮件订阅？**
推荐免费的 [Buttondown](https://buttondown.com) 或 [Substack](https://substack.com)，注册后把订阅表单嵌入页面即可。

---

祝写作愉快 ✍️
