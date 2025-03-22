import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import alpinejs from '@astrojs/alpinejs'
import robotsTxt from 'astro-robots-txt'
import remarkEmoji from 'remark-emoji'
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://airsydneyhills.netlify.app',
  integrations: [
    UnoCSS({
      injectReset: true // or a path to the reset file
    }),
    sitemap(),
    alpinejs(),
    robotsTxt()
  ],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkReadingTime, remarkEmoji]
  },
  scopedStyleStrategy: 'where'
})
