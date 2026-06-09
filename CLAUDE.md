# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start dev server at http://localhost:4321
npm run build            # Production build to dist/
npm run preview          # Preview built site
npm run new:post "标题"   # Scaffold a new blog post
npm run new:project "名称" # Scaffold a new project page
```

Requires Node >= 22.12.0.

## Architecture

**Astro 6 static site** with Tailwind CSS v4 and MDX. Content is markdown files — no database, no CMS, no server runtime.

### Content Flow

```
src/content/{blog,projects}/*.md
  → content.config.ts (Zod schema validation via glob loader)
  → getCollection() / getStaticPaths() in page components
  → Static HTML pages in dist/
```

Adding a `.md` file to `src/content/blog/` or `src/content/projects/` automatically creates a new route. Invalid frontmatter causes build errors (schema enforced by Zod).

### Key Files

| File | Purpose |
|------|---------|
| `src/content.config.ts` | Collection schemas (blog + projects). **Modify this when adding new frontmatter fields.** |
| `src/layouts/BaseLayout.astro` | HTML shell (head, fonts, Header, Footer). All pages inherit this. |
| `src/styles/global.css` | Tailwind v4 `@theme` tokens (colors, fonts) + component classes (`.card`, `.btn-primary`, `.tag`, `.prose-custom`). |
| `src/pages/blog/[slug].astro` | Blog detail — renders markdown via `<Content />` inside `.prose-custom`. |
| `src/pages/projects/[slug].astro` | Project detail — cover image, gallery, status badge, rendered markdown. |

### Content Collections

**Blog** (`src/content/blog/`): `title`, `description`, `pubDate`, `tags[]`, `draft`, `updatedDate`.

**Projects** (`src/content/projects/`): `title`, `description`, `image`, `tags[]`, `category` (personal|work|opensource), `status` (planning|in-progress|completed|archived), `gallery[]`, `github`, `demo`, `featured`, `order`, `startDate`, `endDate`.

### Design System

Primary color: `#1E40ED` (Exa blue). Fonts: Inter + JetBrains Mono. Style: minimal, clean, lots of whitespace.

### Static Assets

- Blog images: `public/blog-images/` → reference as `![](/blog-images/xxx.png)`
- Project images: `public/projects/` → reference in frontmatter as `/projects/xxx.png`

## Deployment

Cloudflare Pages auto-deploys on push to GitHub (`main` branch). Build command: `npm run build`, output: `dist/`, Node 22.

## Language

All user-facing content and comments are in Chinese (zh-CN). Code and technical identifiers use English.
