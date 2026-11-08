import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 书签分类集合：src/content/navs/ 下每个 md 是一个分类。
 * 文件内格式：
 *   ### 子分组名（可选）
 *   - [标题](https://example.com) 一句话备注（备注可选）
 */
const navs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/navs' }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().default(99),
  }),
});

export const collections = { navs };
