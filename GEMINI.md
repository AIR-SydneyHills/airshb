# GEMINI.md

## Project Overview

**AIR Sydney Hills** is the official website for the Australian Independent Retirees (A.I.R.) Sydney Hills Branch. It is built using **Astro 6** and serves as a content-driven platform featuring news, articles, and meeting information for retirees.

- **Primary URL:** [https://airsydneyhills.netlify.app](https://airsydneyhills.netlify.app)
- **Framework:** [Astro](https://astro.build/)
- **Language:** TypeScript
- **Styling:** [UnoCSS](https://unocss.dev/) (Wind3, Icons, Attributify, Typography)
- **Interactivity:** Vanilla JS Custom Elements (Web Components)

## Core Technologies

- **Content Management:** Astro Content Collections (Markdown/MDX).
- **Search:** Local full-text search using [Lunr](https://lunrjs.com/).
- **Image Handling:** [PhotoSwipe](https://photoswipe.com/) for galleries; [Exifr](https://mutiny.cz/exifr/) for EXIF data.
- **SEO & Metadata:** `astro-seo`, `astro-robots-txt`, `@astrojs/sitemap`.
- **Utilities:** `reading-time` for estimated reading times, `remark-emoji` for Markdown emoji support.

## Building and Running

This project uses `pnpm` as the package manager.

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies. |
| `pnpm dev` | Start the local development server (defaults to `localhost:4321`). |
| `pnpm build` | Build the production site to the `dist/` directory. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm check` | Run `astro check` for type-checking and diagnostics. |
| `pnpm lint` | Format code with Prettier and run ESLint. |

## Development Conventions

### Content Collections
All content is managed via Astro Collections in `src/content/`. Schemas are defined in `src/content.config.ts`.
- `blog`: Main articles and blog posts.
- `news`: Branch and national news updates.
- `meeting`: Information about upcoming and past meetings.
- `next`: Future events or "what's next" section.
- `page`: Static pages (About, Terms, Privacy, etc.).
- `author` & `category`: Referenced by blog and news items.

### Styling with UnoCSS
The project uses UnoCSS for atomic styling. 
- Configuration is in `uno.config.ts`.
- It uses the `presetWind3` (Tailwind-compatible) and `presetAttributify` (attribute-based classes).
- Icons are handled via the `presetIcons` (e.g., `i-heroicons-sparkles`).

### Site Configuration
- Global metadata (title, author, org details) is located in `src/config.ts`.
- Navigation links are defined in `src/config.ts`.
- Social media links are managed in `src/social.json`.

### Coding Standards
- **Linting:** ESLint with `eslint-plugin-astro` and `unocss` config.
- **Formatting:** Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss` (for UnoCSS class sorting).
- **Markdown:** HTML is discouraged in Markdown files (enforced by ESLint).

## Directory Structure

- `src/assets/`: Images, logos, and documents.
- `src/components/`: Reusable Astro components.
- `src/layouts/`: Base layouts for different page types.
- `src/pages/`: File-based routes.
- `src/content/`: Source files for content collections.
- `remark-plugins/`: Custom plugins for Markdown processing.
