import { defineCollection } from 'astro:content'
import { rssSchema } from '@astrojs/rss'

const meetings = defineCollection({
  schema: rssSchema
})

export const collections = { meetings }
