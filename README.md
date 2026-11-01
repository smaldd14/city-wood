# City Wood: Hoboken firewood delivery

The landing page for a firewood delivery subscription in Hoboken, NJ. It's one page, built with [Astro](https://astro.build) and deployed on Cloudflare.

- **Business context, goals and rules:** [`CLAUDE.md`](CLAUDE.md)
- **Decision log:** [`docs/decisions.md`](docs/decisions.md)
- **Changing the look or the words:** [`docs/EDITING.md`](docs/EDITING.md)

## Where things live

| File | What it controls |
|---|---|
| `src/styles/global.css` | **All design**: colors, fonts, spacing, roundness (variables at the top) |
| `src/config.ts` | Business name, contact info, plans and prices, offer details, tracking IDs |
| `src/pages/index.astro` | Page wording and section order (hero, how it works, plans, FAQ, …) |
| `src/layouts/Base.astro` | `<head>`: fonts, meta tags, analytics scripts |
| `src/pages/api/waitlist.ts` | Waitlist form endpoint (Cloudflare KV) |
| `public/` | Images, favicon, social share image (`og.png`) |

## Commands

```bash
npm install       # once
npm run dev       # live preview at http://localhost:4321 (updates as you save)
npm run build     # production build into ./dist
npm run deploy    # deploy to Cloudflare (needs `npx wrangler login` once)
```

## Waitlist storage (one-time setup)

```bash
npx wrangler kv namespace create WAITLIST
```

Add the returned id to `wrangler.json`:

```json
"kv_namespaces": [{ "binding": "WAITLIST", "id": "<id>" }]
```

Until this is done, the form falls back to asking people to email us, so no signup is silently lost.
