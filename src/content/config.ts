import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['ja', 'en']).default('ja'),
    summary: z.string().optional(),
  }),
});

export const collections = { news };
