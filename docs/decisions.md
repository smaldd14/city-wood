# Decision log

Newest first. Each entry: what we decided, why, and who still needs to approve it.

## 2026-11-01: Landing page v1

- **Kept the existing Astro + Cloudflare Workers setup** (static assets + one Worker route for the waitlist) rather than switching to Cloudflare Pages. Same effect for this phase (static, fast, deployed from git), and it was already in the repo.
- **One page** for now, per founder. Sections: hero, how it works, plans, what you get, founding-member note (shows automatically once `LAUNCH.firstDelivery` is set), service area + waitlist, FAQ, footer.
- **Look:** warm and cozy. Dark walnut hero with an ember glow, cream page, serif headings (Fraunces). All design tokens are CSS variables at the top of `src/styles/global.css` so the founder's wife can restyle without touching markup.
- **No Stripe yet**, per founder. Plan buttons say "Notify me at launch" and scroll to the waitlist. When Payment Links exist, add `paymentLink` to each plan in `src/config.ts` and swap the button back to a checkout link.
- **Tracking scaffolded but off:** Cloudflare Web Analytics, Plausible, Meta Pixel and Google tag only load once their IDs are set in `src/config.ts`. UTM/`ref`/`promo` params are captured on first landing and attached to waitlist signups so flyer/ad sources are measurable from day one.
- **Waitlist** writes to Cloudflare KV (`WAITLIST`). Needs a one-time `wrangler kv namespace create`. Until then the form tells people to email us instead.

### Needs founder approval

- **Draft pricing on the page (placeholder, not approved):** Starter $49/mo (4 bundles), Regular $85/mo (8), Fireside $119/mo (12). A "bundle" is ~0.75 cu ft, the same size as a grocery-store bundle, so customers can compare directly. Rationale: grocery bundles run roughly $8–10, so $10–12 per delivered bundle is a modest premium for not carrying it home. Revisit once supplier cost is known.
- Business name ("City Wood" is a placeholder taken from the repo name), domain, contact email.
- Wood description (seasoned oak/ash/maple mix), delivery day/window and refund wording, all placeholders in `src/config.ts`.
