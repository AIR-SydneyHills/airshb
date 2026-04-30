# GEMINI.md

## Project Overview

**AIR Sydney Hills** is the official website for the Australian Independent Retirees (A.I.R.) Sydney Hills Branch. It is built using **Astro 6** and serves as a content-driven platform featuring news, articles, and meeting information for retirees.

- **Primary URL:** [https://airsydneyhills.netlify.app](https://airsydneyhills.netlify.app)
- **Framework:** [Astro](https://astro.build/) (v6.x)
- **Language:** TypeScript (Type-aware linting enabled)
- **Styling:** [UnoCSS](https://unocss.dev/) (Wind3, Icons, Attributify, Typography)
- **Interactivity:** Vanilla JS Custom Elements (Web Components) - Zero framework dependencies for UI interactivity.
- **View Transitions:** Enabled via `<ClientRouter />` for smooth, SPA-like navigation.

## Core Technologies

- **Content Management:** Astro Content Collections with the new Loader API (`glob`, `file`).
- **Search:** Dynamic "search-as-you-type" local search using [FlexSearch](https://github.com/nextapps-de/flexsearch) with client-side indexing and weighted field relevance. Content is optimized via markdown stripping.
- **Image Handling:** [PhotoSwipe](https://photoswipe.com/) for galleries; [Exifr](https://mutiny.cz/exifr/) for EXIF data.
- **SEO & Metadata:** `astro-seo` with explicit canonicals and schema-driven JSON-LD.
- **CMS:** [DecapCMS](https://www.decapcms.org/) with Local Backend support and Editorial Workflow.

## Building and Running

This project uses `pnpm` as the package manager.

| Command         | Action                                                             |
| :-------------- | :----------------------------------------------------------------- |
| `pnpm install`  | Install dependencies.                                              |
| `pnpm dev`      | Start the local development server (defaults to `localhost:4321`). |
| `pnpm build`    | Build the production site to the `dist/` directory.                |
| `pnpm run cms`  | Start the local DecapCMS proxy for content editing.                |
| `pnpm run lint` | Run Prettier and ESLint (Flat Config).                             |
| `pnpm check`    | Run `astro check` for type-checking and diagnostics.               |

## Development Conventions

### Content Collections

All content is managed via Astro Collections in `src/content/`. Schemas are defined in `src/content.config.ts`.

- `blog` & `news`: Featured articles and updates.
- `meeting`: Branch meetings (generates Schema.org `Event` data).
- `social`: Managed via `src/social.json` with a Zod schema.

### Search Indexing

All site content is searchable via a client-side FlexSearch index bundled with the application.

- **Data Source:** `src/pages/search-docs.json.js` aggregates content from all collections (`blog`, `news`, `meeting`, `page`, `next`).
- **Optimization:** Content is stripped of markdown syntax to reduce payload size and improve matching accuracy.
- **Dynamic UX:** Results are displayed in real-time as the user types, with weighted relevance for titles and descriptions.
- **Bundling:** FlexSearch is imported and bundled via Vite, removing external CDN dependencies.

### Styling & UI

- **Components:** Standardized UI elements (e.g., `Button.astro`) are used for consistent visual language.
- **Accessibility:** Body text defaults to `text-lg` (18px) for readability. Contrast ratios are enforced to WCAG AA/AAA standards.
- **Transitions:** Layouts use the `ClientRouter` for persistent state (like theme) across pages.

### CMS Workflow

- **Local Backend:** Use `pnpm run cms` then visit `/admin` to edit local content without pushing to Git.
- **Editorial Workflow:** Production CMS uses an editorial workflow (Draft -> Review -> Ready) to ensure content quality.
- **Validation:** Critical fields (Title, Date, Image) have `allow_empty: false` to prevent build failures.

### Coding Standards

- **Linting:** ESLint Flat Config with `typescript-eslint` (type-aware), `import-x`, and `jsx-a11y`.
- **Formatting:** Prettier with `prettier-plugin-tailwindcss` for UnoCSS class sorting.
- **Imports:** Automatically sorted via `eslint-plugin-import-x`.

## Directory Structure

- `public/admin/`: DecapCMS configuration and entry point.
- `src/assets/`: Optimized images and site assets.
- `src/components/`: Pure Astro & Web Component (Custom Element) blocks.
- `src/layouts/`: Base layouts (base, blog, page).
- `src/content/`: Source files and collection configuration.
