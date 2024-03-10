import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const meeting = await getCollection('meetings')
  return rss({
    title: 'AIR Sydney Hills Branch',
    description: 'Australian Independent Retirees Sydney Hills Branch',
    site: context.site,
    items: meeting.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `${context.site}blog/${post.slug}/`
    }))
  })
}
