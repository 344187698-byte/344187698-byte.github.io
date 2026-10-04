// ============================================================
// 站点全局配置：改这里就能改全站的文字、导航和链接
// ============================================================
export const SITE = {
  // 站点标题（浏览器标签、页脚、RSS 都会用到）
  title: '你的名字',
  // 站点副标题 / 一句话简介
  description: '写作者与读者。记录关于生活、书和慢下来的思考。',
  // 作者名
  author: '你的名字',
  // 网站地址，需与 astro.config.mjs 里的 site 保持一致
  url: 'https://YOUR-USERNAME.github.io',

  // 顶部导航
  nav: [
    { label: '首页', href: '/' },
    { label: '文章', href: '/blog' },
    { label: '关于', href: '/about' },
  ],

  // 社交与联系方式（改成你自己的）
  social: {
    instagram: 'https://www.instagram.com/yourname',
    email: 'you@example.com',
  },
};
