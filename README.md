# salmansadiksiddiquee.vercel.app

Personal portfolio: [live site](https://salmansadiksiddiquee.vercel.app).

Editorial one-pager plus three written case studies (`/work/affpilot`, `/work/device-platform`, `/work/school-platform`) covering the production systems I've built: an AI content platform (1M+ generated articles), a medical-device lifecycle platform, and a solo-operated school management system.

## Stack

- **Next.js 16** (App Router, static generation) · **React 19** · **TypeScript**
- **Tailwind CSS 4** with an OKLCH token system (light/dark via `next-themes`)
- **Framer Motion**: scroll reveals, metric count-ups, and a motion-value cursor (no per-frame re-renders); everything respects `prefers-reduced-motion`
- OG image generated with `next/og`, sitemap + robots via metadata routes

## Run

```bash
npm install
npm run dev   # http://localhost:3000
```

All content lives in [`lib/data.ts`](lib/data.ts).
