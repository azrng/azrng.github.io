import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 书签分类集合：src/content/navs/ 下每个 md 是一个分类。
 * 文件内格式：
 *   ### 子分组名（可选）
 *   - [标题](https://example.com) #标签（可选，可多个） 一句话备注（备注可选）
 * 标签并入前端搜索并可跨分类检索（条目物理上只放一处）。
 */
const navs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/navs' }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().default(99),
  }),
});

export const collections = { navs };
