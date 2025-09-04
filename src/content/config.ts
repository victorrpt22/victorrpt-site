import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    locale: z.enum(['en', 'es']).default('en'),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    intro: z.string().optional(),
    sourceUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };
