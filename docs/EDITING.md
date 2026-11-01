# Editing the site

You don't need to touch any code logic to change how the site looks or what it says.

## See your changes live

```bash
npm install     # first time only
npm run dev
```

Open http://localhost:4321. The page reloads every time you save a file.

## Change the look: `src/styles/global.css`

Everything at the top of the file, between the **DESIGN SETTINGS** banners, is meant to be edited:

| Variable | What it is | Current |
|---|---|---|
| `--paper` | Main background | warm cream `#f7efe3` |
| `--paper-deep` | Alternating section background | `#efe2cf` |
| `--card` | Plan cards and form | `#fffaf2` |
| `--ink` / `--ink-soft` | Main / secondary text | dark walnut `#2b1d14` / `#5e4a3b` |
| `--night`, `--night-2` | Dark hero and footer | `#2b1d14` → `#3d2a1d` |
| `--ember` | Buttons and accents | ember orange `#c4561f` |
| `--ember-glow` | Soft highlights and the glow at the bottom of the hero | `#f0a35e` |
| `--font-display` | Headings | Fraunces |
| `--font-body` | Body text | Source Sans 3 |
| `--radius`, `--radius-btn` | Corner roundness for cards / buttons | `14px` / pill |

**Changing fonts:** pick fonts on [Google Fonts](https://fonts.google.com), replace the font `<link>` in `src/layouts/Base.astro` with the one Google gives you, then update `--font-display` / `--font-body`.

**Keep text readable:** if you change background or text colors, check the pair at [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/). Aim for at least 4.5:1 for body text.

## Change the words

- **Business name, email, phone, prices, wood details:** `src/config.ts`
- **Headlines, section text, FAQ:** `src/pages/index.astro`. The FAQ is a list near the top of that file. The page sections follow in order below it.

## Add a photo

1. Put the image in `public/` (for example `public/fireplace.jpg`). Keep it under ~300 KB; [squoosh.app](https://squoosh.app) can shrink it.
2. Use it in `index.astro` like this: `<img src="/fireplace.jpg" alt="Describe the photo" width="1200" height="800" loading="lazy" />`
3. For the hero background, add `url("/fireplace.jpg") center/cover` as the last layer of the `.hero` `background` in `global.css`.

Only use photos we took or have the rights to. No stock photos presented as our customers.

## Social share image

`public/og.png` (1200×630) is what shows up when the link is shared on Facebook, iMessage and similar. Replace it with any 1200×630 image.
