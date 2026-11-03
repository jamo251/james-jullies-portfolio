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
