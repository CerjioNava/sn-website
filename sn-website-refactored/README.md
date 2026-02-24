# Sergio Nava – Personal Website (Refactored)

Refactored version of the personal portfolio site, built with **Vite**, **React 18**, and **react-router-dom v6**.

## Stack

- **Vite** – Build tool and dev server
- **React 18**
- **react-router-dom** v6
- **react-helmet-async** – Document head / SEO
- **SCSS** + **Tachyons** – Styling
- **@react-three/fiber** + **@react-three/drei** + **three** – 3D background

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Production build (output in `dist/`)
- `npm run preview` – Serve the production build locally
- `npm run lint` – Run ESLint

## Deployment (Netlify)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- No extra config required for a standard SPA.

If you use a custom domain or redirects, configure them in the Netlify dashboard or in `netlify.toml`.

## Assets

- **Fonts:** The app uses **Google Fonts** (Source Code Pro, Mitr) so typography works without local files. To use local fonts, place `SourceCodePro-Regular.ttf` and `Mitr-Medium.ttf` in `public/fonts/`.
- **Media:** Images and logos live in `src/media/` (Nav, Gallery, Logos, Skills, Hobby). Copy from the original project’s `src/media/` if you need to restore or update assets.
- **Favicon:** The app uses `public/vite.svg` as the default icon. Replace with `public/favicon.ico` or your own icon if you prefer.

## Original vs refactored

- Migrated from Create React App to Vite
- React 17 → 18, react-router v5 → v6
- react-helmet → react-helmet-async
- Router uses `<Routes>` / `<Route element={...} />`
- PreLoader and loader logic use React state and `useEffect` with cleanup
- Fixed invalid JSX (`class` → `className`) in About
- Added `Portfolio.scss` (was missing)
- Improved semantics (`<main>`, `<section>`, `<footer>`, `<nav>`) and accessibility (e.g. `aria-label` on icon buttons)
