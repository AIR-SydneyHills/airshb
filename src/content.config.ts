// 1. Import your utilities and schemas
import { z, defineCollection, reference } from 'astro:content'
import { glob, file } from 'astro/loaders'
import { rssSchema } from '@astrojs/rss'

// 2. Define your collections
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    rssSchema.extend({
      draft: z.boolean().optional(),
      author: reference('author').optional(),
      image: image().optional(),
      images: z.array(image()).optional(),
      categories: z.array(reference('category')).optional(),
      tags: z.array(z.string()).optional(),
      minutesRead: z.string().optional()
    })
})

const meeting = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/meeting' }),
  schema: ({ image }) =>
    rssSchema.extend({
      draft: z.boolean().optional(),
      image: image().optional(),
      images: z.array(image()).optional(),
      minutesRead: z.string().optional()
    })
})

const next = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/next' }),
  schema: rssSchema
})

const page = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/page' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.date().optional(),
      author: reference('author').optional(),
      image: image().optional(),
      images: z.array(image()).optional(),
      tags: z.array(z.string()).optional()
    })
})

const category = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/category' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string(),
      image: image()
    })
})

const author = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/author' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string(),
      image: image(),
      contact: z.string()
    })
})

const social = defineCollection({
  loader: file('src/social.json', { parser: (text) => JSON.parse(text) })
})

// 3. Export multiple collections to register them
export const collections = {
  blog,
  meeting,
  next,
  page,
  category,
  author,
  social
}
