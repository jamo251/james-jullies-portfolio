# James Jullies — portfolio

Vite + React single-page site, plain CSS, deployed on Vercel.

## Run locally

1. `npm install`
2. `npm run dev` (front end only), or `npx vercel dev` to also run the `/api` functions.

## Environment variables

| Variable | Where | Purpose |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | Vercel (server only) | Ask AI guide (`api/chat.ts`, Claude Haiku 5.5). Never prefix with `VITE_`. |

## Content

All published content lives in `data/content.ts`. The Ask AI guide builds its system prompt from the same file (`data/systemPrompt.ts`), so the guide only knows what the site shows.

## Arabic version

The site follows the visitor's device language the same way it follows light/dark mode. If their first preferred language is Arabic (`navigator.languages`), they get an Arabic, right-to-left version; everyone else gets English. Add `?lang=ar` or `?lang=en` to a URL to force a version for the rest of that tab's session (handy for previewing).

- Interface text: `data/strings.ts`
- Home page: the `HomeArabic` body in `components/HomePage.tsx`
- Case studies: `data/content.ar.ts`, keyed by slug. When you edit a case study in `data/content.ts`, update its Arabic copy too.
- The Ask AI guide answers in Arabic for Arabic visitors (`locale` is sent to `api/chat.ts`).
