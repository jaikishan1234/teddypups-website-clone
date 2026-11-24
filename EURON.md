# teddypups-website-clone

A TeddyPups website clone built with Next.js 16, React 19, Tailwind 4, shadcn/ui (base-nova).

## Commands

| Command | Script |
|---------|--------|
| `npm run dev` | `next dev` |
| `npm run build` | `next build` |
| `npm run start` | `next start` |
| `npm run lint` | `eslint` |

## Layout

```
src/app/          # App Router pages and layout
src/components/ui/ # shadcn/ui components (~50+ components)
src/hooks/        # Custom hooks (useHighlightedCode, useIsMobile)
src/lib/          # Utilities (highlighter.tsx, utils.ts)
public/           # Static assets (5 files)
```

## Conventions

- **App Router** with server components; entry at `src/app/page.tsx`.
- **shadcn/ui** via `components.json` aliases: `@/components/ui`, `@/lib/utils`, `@/hooks`.
- **Tailwind 4** (CSS-first config, no `tailwind.config.js`), animations via `tw-animate-css`.
- **TypeScript strict**: no `any`, no `@ts-ignore` unless explained.
- **Fonts**: Geist Sans + Geist Mono via `next/font/google` (CSS variables).
- **Icons**: Lucide React.
- **Forms**: React Hook Form + Zod + @hookform/resolvers.
- **Animations**: Framer Motion.
- **Charts**: Recharts 3.
- **Package manager**: npm (package-lock.json present).
- **No test framework** currently in the project.

## Security

- XSS finding (SEC050): HTML inserted without escaping. Render text or sanitise before inserting. See `.euron/security/assessment.md`.
