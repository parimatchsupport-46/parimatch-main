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
## Deploy on Render

A Render Static Site Blueprint is provided in `render.yaml`.

### New site with Blueprint
1. Push this source to GitHub.
2. In Render, choose **New > Blueprint** and connect the repository.
3. Review and apply the Blueprint. It builds the project, publishes `dist/` and configures the SPA rewrite.

### Existing site created manually
Pushing `render.yaml` alone does not automatically reconfigure a manually created site. In the Render dashboard, set:
- Service: **Static Site**
- Root Directory: leave blank (repository root)
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`
- Environment variable: `NODE_VERSION=22.14.0`
- Redirects/Rewrites: source `/*`, destination `/index.html`, action **Rewrite**

Save and use **Clear build cache & deploy**. A Web Service should be replaced with a Static Site for this frontend-only project.

The rewrite supports `/about`, `/terms` and the legacy `.html` aliases. Do not publish the repository root or use Vite's development server as a production server.

## Structure
- `index.html`: required Vite entry document, not a duplicate static website.
- `src/main.jsx`: React entry and page selection.
- `src/pages/`: Home, About and Terms page components.
- `src/components/`: shared Header, Sidebar and Footer.
- `src/hooks/usePageEffects.js`: menu, scroll reveals and banner fallback.
- `src/styles/`: shared, non-duplicated CSS files.
- `public/`: the banner, header logo and favicon actually used by the site.
- `vite.config.js`, `package.json`, `package-lock.json`: build configuration and reproducible dependencies.
- `render.yaml`: Render Static Site build, publish directory and page rewrites.

To update the Support Center redirect, change its `href` in `src/pages/Home.jsx`.

Unused standalone intro files and the unreferenced old banner were removed. The original page styling is retained. No GitHub push has been made.
