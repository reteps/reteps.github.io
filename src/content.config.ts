import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './blog',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, '')
  }),
  schema: z.object({
    title: z.string(),
    date: z.string()
  })
});

export const collections = { blog };
