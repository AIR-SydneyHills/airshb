import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const meetings = await getCollection('meetings')
  return rss({
    title: 'AIR Sydney Hills Branch',
    description: 'Australian Independent Retirees Sydney Hills Branch',
    site: context.site,
    items: meetings.map((meeting) => ({
      title: meeting.data.title,
      pubDate: meeting.data.pubDate,
      description: meeting.data.description,
      customData: meeting.data.customData,
      // Compute RSS link from meeting `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `${context.site}blog/${meeting.slug}/`
    }))
  })
}
