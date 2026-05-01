import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional().default([]),
    readingTime: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
