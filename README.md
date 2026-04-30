# AIR Sydney Hills Branch

Australian Independent Retirees Sydney Hills Branch website. Based on [Astro Blog](https://github.com/ChristineTham/astro-blog).

Transferred to AIR-SydneyHills 9 July 2024

Uses:

- [Astro](https://astro.build/) (v6.x)
- [TypeScript](https://www.typescriptlang.org/)
- [Markdown](https://www.markdownguide.org/)
- [Vanilla JS Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) for interactivity (Zero-dependency)
- [Schema.org](https://schema.org/) and [JSON for Linking Data](https://json-ld.org/), type-checked using [schema-dts](https://github.com/google/schema-dts)
- [Open Graph](https://ogp.me/) used by [Facebook](https://developers.facebook.com/docs/sharing/webmasters/#markup)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- Dynamic local full-text search using bundled [FlexSearch](https://github.com/nextapps-de/flexsearch)
- [reading-time](https://github.com/ngryman/reading-time)
- [PhotoSwipe](https://photoswipe.com)
- [exifr](https://mutiny.cz/exifr/)
- [Remark Emoji](https://github.com/rhysd/remark-emoji)
- [UnoCSS](https://unocss.dev) (Wind3, Icons, Attributify, Typography)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── admin/          # DecapCMS Configuration & Entry
│   └── favicon.ico
├── src/
│   ├── assets/         # Images, Logos, and Documents
│   ├── components/     # Reusable Astro Components
│   ├── content/        # Content Collections (Blog, Meetings, News, etc.)
│   │   └── config.ts   # Collection Schemas & Loaders
│   ├── layouts/        # Base, Blog, and Page Layouts
│   ├── pages/          # File-based Routes
│   ├── config.ts       # Site Metadata & Navigation
│   └── env.d.ts        # Type Definitions
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                             |
| :--------------- | :------------------------------------------------- |
| `pnpm install`   | Installs dependencies                              |
| `pnpm dev`       | Starts local dev server at `localhost:4321`        |
| `pnpm build`     | Build your production site to `./dist/`            |
| `pnpm preview`   | Preview your build locally, before deploying       |
| `pnpm run cms`   | Start the local DecapCMS proxy server              |
| `pnpm run lint`  | Run Prettier and ESLint (Fixes available)          |
| `pnpm check`     | Check the source code for errors                   |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro preview` |

## ♿ Accessibility & SEO

- **Typography:** Baseline font size set to `text-lg` (18px) for improved readability among retirees.
- **Contrast:** Colors selected to meet WCAG AA/AAA standards (High contrast gray/orange).
- **Structured Data:** Contextual JSON-LD including `Event` (for Meetings), `Organization` (Local SEO with Geo-data), and `Article`.
- **Localization:** Configured for `en-AU` (Australian English) and Sydney timezone.
