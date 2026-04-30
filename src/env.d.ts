/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module 'hero-patterns'
declare module 'photoswipe-dynamic-caption-plugin'
declare module '@akebifiky/remark-simple-plantuml'

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  netlifyIdentity: any
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-var
declare var netlifyIdentity: any

