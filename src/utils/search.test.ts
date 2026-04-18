import { describe, expect, it } from 'vitest'

import { cleanContent } from './search'

describe('cleanContent', () => {
  it('should return empty string for undefined or null input', () => {
    expect(cleanContent(undefined)).toBe('')
    // @ts-expect-error testing null input
    expect(cleanContent(null)).toBe('')
  })

  it('should remove HTML comments', () => {
    const input = 'Hello <!-- comment --> World'
    expect(cleanContent(input)).toBe('Hello World')
  })

  it('should replace markdown links with link text', () => {
    const input = 'Check out [Astro](https://astro.build)'
    expect(cleanContent(input)).toBe('Check out Astro')
  })

  it('should remove markdown formatting characters', () => {
    const input = '# Header\n\n**Bold** and *italic* and `code` and ~~strikethrough~~'
    expect(cleanContent(input)).toBe('Header Bold and italic and code and strikethrough')
  })

  it('should squash multiple spaces and newlines', () => {
    const input = 'Hello    \n\n   World'
    expect(cleanContent(input)).toBe('Hello World')
  })

  it('should trim whitespace from ends', () => {
    const input = '   Hello World   '
    expect(cleanContent(input)).toBe('Hello World')
  })

  it('should handle complex markdown', () => {
    const input = `
      # Welcome to AIR
      <!-- Internal Note -->
      Join our [next meeting](/meeting/next) for **exciting** news!
      > Important quote here.
    `
    expect(cleanContent(input)).toBe(
      'Welcome to AIR Join our next meeting for exciting news! Important quote here.'
    )
  })
})
