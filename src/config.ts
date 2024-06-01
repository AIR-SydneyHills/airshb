import type { CollectionEntry } from 'astro:content'

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'AIR Sydney Hills',
  description: 'Australian Independent Retirees Sydney Hills Branch',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.'
  },
  org: {
    name: 'Australian Independent Retirees',
    twitter: '@airsydneyhills',
    url: 'https://independentretirees.com.au',
    email: 'airsydneyhills@gmail.com',
    summary:
      'The Australian Independent Retirees (A.I.R.) Limited is a volunteer organisation working to advance and protect the interests and independent lifestyle of Australians aged 50+ who are, or plan to be, fully or partly self-funded in retirement. The Association is a national not-for-profit organisation formed in 1990. AIR does not support any one political party but works towards ensuring all parties recognise the issues that are important to retirees.'
  },
  location: 'Beecroft Presbyterian Church, 1a Mary St, Beecroft NSW 2119 Australia',
  latlng: [-33.753737, 151.064758] as [number, number],
  repository: 'https://github.com/ChristineTham/airsydneyhills',
  buildTime: new Date()
}

export { default as Logo } from './assets/site/logo.svg'
export { default as LogoImage } from './assets/site/logo-wide.jpg'
export { default as FeaturedImage } from './assets/site/retirementahead.jpg'
export { default as DefaultImage } from './assets/site/retirementahead.jpg'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Terms', href: 'terms' },
  { name: 'Privacy', href: 'privacy' },
  { name: 'Contact', href: 'contact' }
]

export const PAGE_SIZE = 48
