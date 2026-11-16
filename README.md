# PARIMATCH — React + Vite

## Run
Requires Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run dev
```

## Build
```bash
npm run build
npm run preview
```
Deploy `dist/`. Vercel rewrites are included. Other hosts must serve `index.html` for `/about` and `/terms` (and the legacy `/about.html` and `/terms.html` aliases).

## Structure
- `index.html`: required Vite entry document, not a duplicate static website.
- `src/main.jsx`: React entry and page selection.
- `src/pages/`: Home, About and Terms page components.
- `src/components/`: shared Header, Sidebar and Footer.
- `src/hooks/usePageEffects.js`: menu, scroll reveals and banner fallback.
- `src/styles/`: shared, non-duplicated CSS files.
- `public/`: the banner, header logo and favicon actually used by the site.
- `vite.config.js`, `package.json`, `package-lock.json`: build configuration and reproducible dependencies.
- `vercel.json`: direct page-load support on Vercel.

To update the Support Center redirect, change its `href` in `src/pages/Home.jsx`.

Unused standalone intro files and the unreferenced old banner were removed. The original page styling is retained. No GitHub push has been made.
