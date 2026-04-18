import { getCollection, getEntry } from 'astro:content'

import { cleanContent } from '../utils/search'

async function mapPost(post, collection) {
  const author = post.data.author ? await getEntry(post.data.author) : null
  return {
    url: import.meta.env.BASE_URL + collection + '/' + post.id,
    title: post.data.title,
    description: post.data.description,
    author: author ? `${author.data.title} (${author.data.contact})` : '',
    pubDate: post.data.pubDate,
    categories: post.data.categories?.map((category) => category.id).join(' ') ?? '',
    tags: post.data.tags?.join(' ') ?? '',
    content: cleanContent(post.body)
  }
}

const posts = await getCollection('blog', (p) => !p.data.draft)
const news = await getCollection('news', (p) => !p.data.draft)
const meetings = await getCollection('meeting', (p) => !p.data.draft)
const pages = await getCollection('page', (p) => !p.data.draft)
const nexts = await getCollection('next')

const blogDocs = await Promise.all(posts.map((post) => mapPost(post, 'blog')))
const newsDocs = await Promise.all(news.map((post) => mapPost(post, 'news')))

const meetingDocs = meetings.map((meeting) => ({
  url: import.meta.env.BASE_URL + 'meeting/' + meeting.id,
  title: meeting.data.title,
  description: meeting.data.description,
  author: '',
  pubDate: '',
  categories: '',
  tags: '',
  content: cleanContent(meeting.body)
}))

const pageDocs = await Promise.all(
  pages.map(async (page) => {
    const author = page.data.author ? await getEntry(page.data.author) : null
    return {
      url: import.meta.env.BASE_URL + page.id,
      title: page.data.title,
      description: page.data.description,
      author: author ? `${author.data.title} (${author.data.contact})` : '',
      pubDate: page.data.pubDate ?? '',
      categories: '',
      tags: page.data.tags?.join(' ') ?? '',
      content: cleanContent(page.body)
    }
  })
)

const nextDocs = nexts.map((next) => ({
  url: import.meta.env.BASE_URL + 'next',
  title: next.data.title,
  description: next.data.description ?? '',
  author: '',
  pubDate: next.data.pubDate ?? '',
  categories: '',
  tags: '',
  content: cleanContent(next.body)
}))

const documents = [...blogDocs, ...newsDocs, ...meetingDocs, ...pageDocs, ...nextDocs]

export function GET() {
  return new Response(JSON.stringify(documents), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
