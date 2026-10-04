import { defineConfig } from 'astro/config';

// ===== 部署前需要修改的地方 =====
// 1) 把 site 改成你的 GitHub Pages 地址。
// 2) 保持 base 为 '/'。
//
// 情况 A：仓库名就叫 <你的用户名>.github.io
//   site: 'https://<你的用户名>.github.io'
//   base: '/'
//
// 情况 B：仓库名叫别的（例如 my-blog）
//   网址会变成 https://<你的用户名>.github.io/my-blog/
//   site: 'https://<你的用户名>.github.io'
//   base: '/my-blog/'
//
// 推荐用「情况 A」，仓库名写成 <用户名>.github.io，base 保持 '/'，最省事。
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/',
});
