import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['work', 'personal', 'opensource']).default('personal'),
    status: z.enum(['planning', 'in-progress', 'completed', 'archived']).default('in-progress'),
    gallery: z.array(z.string()).default([]),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, projects };
