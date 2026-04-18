import { getCollection } from 'astro:content'
import lunr from 'lunr'

const posts = await getCollection('blog', (p) => {
  return !p.data.draft
})
const meetings = await getCollection('meeting', (p) => {
  return !p.data.draft
})
const documents = posts
  .map((post) => {
    // const author = await getEntry(post.data.author)
    return {
      url: import.meta.env.BASE_URL + 'blog/' + post.id,
      title: post.data.title,
      description: post.data.description,
      // author: `${author.data.title} (${author.data.contact})`,
      categories: post.data.categories?.map((category) => category.id).join(' '),
      tags: post.data.tags?.join(' '),
      content: post.body
    }
  })
  .concat(
    meetings.map((meeting) => {
      return {
        url: import.meta.env.BASE_URL + 'meeting/' + meeting.id,
        title: meeting.data.title,
        description: meeting.data.description
      }
    })
  )

const idx = lunr(function () {
  this.ref('url')
  this.field('title')
  this.field('description')
  this.field('author')
  this.field('categories')
  this.field('tags')
  this.field('content')

  documents.forEach((doc) => {
    this.add(doc)
  })
})

export function GET() {
  return new Response(JSON.stringify(idx), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
