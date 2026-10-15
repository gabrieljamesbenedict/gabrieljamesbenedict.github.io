# gabrieljamesbenedict.github.io

Personal portfolio for Gabriel Loslos — Software Developer & Designer. Built with React 19, TypeScript, and Vite, deployed to GitHub Pages (user site).

Live: https://gabrieljamesbenedict.github.io/

## Stack

- React 19 + TypeScript + Vite 8
- Plain CSS (BEM, one file per section)
- Vanta.js NET background (loaded via CDN in `src/App.tsx`) + Three.js r134
- Monaspace fonts via CDN

## Develop

```bash
npm ci
npm run dev      # http://localhost:3000
npm run lint
npm run build    # tsc -b && vite build -> dist/
npm run preview
```

## Structure

- `src/App.tsx` — layout + Vanta background init
- `src/sections/` — Header, Hero, AboutMe, Projects, Skills, Education, Contact, Footer
- `src/data/` — ProjectData, SkillsData, EducationData
- `src/styles/` — global `index.css` + per-section CSS
- `public/icons/` — vendored white PNG icons (no hotlinking)
- `public/favicon.svg`, `public/icons.svg`

## Deploy

Push to `master` triggers `.github/workflows/deploy.yaml`: install, build, upload `dist/`, deploy via `deploy-pages`. `vite.config.ts` uses `base: '/'` for user pages.

## Notes

- Three.js / Vanta versions are pinned by CDN URL in `App.tsx` — do not bump without testing for API breaks.
- Project links live in `src/data/ProjectData.ts`.
