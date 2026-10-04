import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 文章集合：src/content/posts 下的每个 Markdown 文件就是一篇博客
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    // 标题
    title: z.string(),
    // 摘要（显示在列表页和 SEO 描述里）
    description: z.string(),
    // 发布日期，格式：2026-01-01
    pubDate: z.coerce.date(),
    // 可选：更新日期
    updatedDate: z.coerce.date().optional(),
    // 是否在首页突出显示
    featured: z.boolean().default(false),
    // 标签
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
