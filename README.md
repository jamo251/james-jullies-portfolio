# James Jullies — portfolio

Vite + React + Tailwind single-page site, deployed on Vercel.

## Run locally

1. `npm install`
2. `npm run dev` (front end only), or `npx vercel dev` to also run the `/api` functions.

## Environment variables

| Variable | Where | Purpose |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | Vercel (server only) | Ask AI guide (`api/chat.ts`, Claude Haiku 5.5). Never prefix with `VITE_`. |
| `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` | Vercel | Contact form (EmailJS public identifiers). |

## Content

All published content lives in `data/content.ts`. The Ask AI guide builds its system prompt from the same file (`data/systemPrompt.ts`), so the guide only knows what the site shows.
