# Project Plans – Commissions Page (Option A: Full Router Now)

## Decisions (confirmed)
1. `/commissions` as a real route in this repo (not a section, not a separate repo).
2. "Commission Me" button in Contact navigates to the page (not direct mailto).
3. Single public email: `gjbmloslos@gmail.com` everywhere. Remove `benok.loslos@gmail.com`.
4. Projects dedicated page deferred to a future pass.

## Router choice: HashRouter (not BrowserRouter)

- Repo is a GitHub **user site** (`gabrieljamesbenedict.github.io`), served from `/`. `vite.config.ts` `base: '/'` is already correct, no change needed.
- GitHub Pages has no SPA fallback rewrite, so `BrowserRouter` breaks on hard refresh / shared deep links (`/commissions` → Pages 404). `HashRouter` produces `/#/commissions`, which always resolves to `index.html`. No `404.html` hack needed.
- Requires adding `react-router-dom` to `package.json`.

### User site vs project site interaction + collision note (future-you reference)

- Project repo named `X` serves at `gabrieljamesbenedict.github.io/X/` and needs `base: '/X/'` in its own `vite.config.ts`.
- If this user site defines a `BrowserRouter` route `/commissions` AND a project repo named `commissions` exists, both claim path `/commissions`. GitHub Pages gives precedence to the **project site** — the user-site route is shadowed/unreachable at that clean URL.
- With `HashRouter` there is **no collision**:
  - `gabrieljamesbenedict.github.io/#/commissions` → user-site route (fragment never hits server).
  - `gabrieljamesbenedict.github.io/commissions/` → project-site repo.
- Rule of thumb: avoid naming a future project repo after any route planned in this site if clean URLs matter. Under `HashRouter` it is safe regardless. Same applies to a future `/projects` route vs a `projects` repo.

## Target structure

```
src/
  App.tsx              → HashRouter + Vanta background + route definitions
  main.tsx             → unchanged (renders App)
  layout/
    Header.tsx         → moved from sections/Header.tsx, <Link> based nav
    Footer.tsx         → moved from sections/Footer.tsx
  pages/
    Home.tsx           → Hero, AboutMe, Projects, Skills, Education, Contact
    Commissions.tsx    → new dedicated page (prices, ToS, status, CTA)
  sections/            → reused as-is inside Home (no logic change)
  data/
    CommissionData.ts  → NEW: tiers, add-ons, ToS, status (mirrors ProjectData.ts pattern)
  components/
    Window.tsx         → reused for Commissions page (Prices / ToS tabs)
```

Keep `Header`/`Footer`/Vanta in a shared layout so they persist across `/` and `/commissions`.

## Changes

### 1. Add dependency
- `npm i react-router-dom` (+ `@types/react-router-dom` if needed for TS version).

### 2. `src/App.tsx` — become router shell
- Keep Vanta init + `app__background` / `app__vanta` wrappers.
- Replace direct section list with `<HashRouter><Routes>`:
  - `/` → `<Home />`
  - `/commissions` → `<Commissions />`
  - `*` → redirect to `/` (or small NotFound inside layout).
- Wrap routes in layout containing `<Header />`, `<Outlet />` content, `<Footer />`.

### 3. `src/pages/Home.tsx` — NEW
- Move current `<div className="app__container">` block (Hero, AboutMe, Projects, Skills, Education, Contact) here unchanged.

### 4. `src/pages/Commissions.tsx` — NEW
- `<section className="section commissions" id="commissions">` reusing `.section__container` / `.section__title` classes.
- `<Window>` with two tabs: **Prices** and **ToS / Guidelines** (tab state local to page).
- Content driven by `CommissionData.ts`: tiers (name, price, description, deliverables), add-ons, ToS bullets, `status: "open" | "closed"` badge.
- CTA: "Start a Commission" → `mailto:gjbmloslos@gmail.com?subject=Commission%20Request%20–%20[Type]&body=...` with prefilled template (type, deadline, references, budget).
- Status badge: if closed, disable/dim CTA and show "currently closed" note.
- NEW `src/styles/Commissions.css`.

### 5. `src/data/CommissionData.ts` — NEW
- Mirror `ProjectData.ts` pattern: exported interface(s) + const data.
- Suggested shape: `CommissionTier { name, price, description, deliverables: string[] }`, `ADD_ONS`, `TOS: string[]`, `STATUS`.

### 6. Header — nav becomes router links
- Current `src/sections/Header.tsx` `NAV_LINKS` are `#aboutme` etc. anchors (desktop nav + mobile drawer).
- Move to `src/layout/Header.tsx` (or keep path and update imports).
- Home anchors must still work from `/`: use `/#aboutme`-style navigation or `useNavigate` + scroll-to-anchor after route change. Simplest: links to `/#<anchor>` and rely on hash-scroll; verify mobile drawer closes on nav.
- Add `{ to: "/commissions", label: "Commissions" }` to both desktop and drawer nav. Decide order (suggest after Projects or after About Me).
- Contact CTA (`header__link--special href="#contact"`) stays pointing at home contact section.

### 7. Contact — "Commission Me" button
- In `src/sections/Contact.tsx` (rendered inside Home), add a button/CTA navigating to `/commissions` via `<Link>` (not mailto).
- Keep existing Email/LinkedIn/GitHub rows; only the email address value changes (see below).

### 8. Email swap: `benok.loslos@gmail.com` → `gjbmloslos@gmail.com`
- `src/sections/Contact.tsx:9` — `mailto:benok.loslos@gmail.com` → `mailto:gjbmloslos@gmail.com`.
- `src/sections/Footer.tsx:15` — same swap.
- Grep repo for any other `benok` occurrences before finishing.

### 9. No changes needed
- `vite.config.ts` (`base: '/'`), `index.html`, `.github/workflows/deploy.yaml` (`path: './dist'`) — all fine for user-site + HashRouter.

## Anchor-link audit (required because router changes URL semantics)
- Existing in-page links: `#aboutme`, `#projects`, `#skills`, `#education`, `#contact`, footer `#hero`.
- After routing, plain `href="#projects"` from `/commissions` would do nothing useful. Header links must route home first then scroll. Footer "Back to Top" on `/commissions` should scroll to top of that page (or link `/`), not `#hero` on home.
- Accept: small scroll-restoration helper (scroll to top on route change; scroll to anchor when hash present).

## Verification
1. `npm run dev` — `/` renders as today; nav to `/commissions` via header, drawer (mobile), and Contact CTA.
2. Deep link / refresh at `/#/commissions` works; back/forward works.
3. `mailto:` links resolve to `gjbmloslos@gmail.com`; Commissions CTA has prefilled subject/body.
4. `npm run build` + `npm run lint` pass. Confirm `dist/index.html` asset paths still root-relative.
5. Grep confirms zero `benok` references remain.

## Out of scope (future pass)
- `/projects` dedicated page (ProjectData migration, showcase layout).
- Any separate `commissions` project repo — only if it becomes a different app (own branding/backend). If created, remember the collision note above.
- `BrowserRouter` + `404.html` hack — rejected for now; revisit only if clean URLs become a hard requirement off GitHub Pages.
