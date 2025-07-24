# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens on http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run export` - Export static files (used for GitHub Pages deployment)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

This is a bilingual (English/Chinese) personal portfolio website built with Next.js 15, using the App Router pattern and static export configuration for GitHub Pages deployment.

### Key Architecture Patterns

**Static Export Configuration**: The site is configured for static export (`output: 'export'`) in `next.config.ts` with unoptimized images and trailing slashes for GitHub Pages compatibility.

**Component-Based Layout**: The main page (`app/page.tsx`) renders modular section components (Hero, About, Experience, Skills, Education) in sequence, each as a full-width section.

**Internationalization**: Uses i18next with browser language detection. Translation files are organized in `i18n/locales/[lang]/` with separate files for navigation, main sections, and footer content.

**Theming System**: Implements dual theme support (light/dark) using next-themes with CSS custom properties defined in `globals.css`. The color system includes Google brand colors and custom halftone/pastel variants.

**UI Component Library**: Built on shadcn/ui (Radix UI + Tailwind CSS) with components in `components/ui/`. Custom styling uses the "new-york" style variant.

### Directory Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components (main sections + UI components)
- `i18n/` - Internationalization configuration and translation files
- `lib/` - Utility functions (mainly Tailwind class merging)
- `hooks/` - Custom React hooks (mobile detection)
- `public/` - Static assets
- `out/` - Generated static export files

### Styling Approach

The project uses Tailwind CSS v4 with custom CSS properties for theming. Color variables support both light and dark modes with Google brand colors for accent elements. The design follows a modern, gradient-heavy aesthetic with card-based layouts and smooth animations.

### Build and Deployment

The project generates static files to the `out/` directory for deployment to GitHub Pages. The export process handles routing with trailing slashes and optimizes for static hosting environments.