# Music Theme Portfolio (fork)

> **This is a fork.** The original portfolio belongs to my friend Faathir Kuspratama Pasha
> (FaathirTaKa) — [FTaKa36/MusicThemePortfolio](https://github.com/FTaKa36/MusicThemePortfolio).
> The design, content and project list are his. This fork exists to review the site and
> contribute improvements back to him through pull requests.
>
> Live site (his): https://faathirkp-tech.vercel.app/

A personal **portfolio website** with a warm "coffee cherry" look and a music-inspired
theme — turntable, vinyl records, and setlist styling carry the whole design.

## What this fork changes

Changes are proposed upstream as pull requests; the original stays the source of truth.

- **Contact form hardening** — hidden honeypot field, input length limits, line breaks
  stripped from the name before it reaches the email subject, and the form now reports
  an error when FormSubmit does not confirm delivery instead of always saying "sent".
- **No theme flash** — the saved or system theme is applied in `<head>` (`theme.js`)
  before first paint.
- **Security headers** — `vercel.json` adds `nosniff`, `X-Frame-Options`,
  `Referrer-Policy` and `Permissions-Policy`.
- **Themed scrollbar** that follows the dark/light palette.
- **Performance** — the cursor glow only animates while it moves, pointer effects run at
  most once per frame, and the scroll-progress bar no longer re-measures the page on
  every frame.
- **Content and link fixes**, share/SEO meta tags, and a `.gitignore` for local tooling.

## What the site is for

- **Show what he builds** — a project list with a short description and current status
  for each one (released, live, or still in development).
- **Introduce his skills** — the languages, frameworks, and tools he works with.
- **Give visitors a way to get in touch** — a contact form for project enquiries,
  plus links to his social and community profiles.

## Tech

Plain **HTML, CSS, and JavaScript** — no build step, no frameworks, no dependencies.

```
index.html           # the whole page
style.css            # design system + all styling
main.js              # interactions (nav, reveals, contact form, effects)
theme.js             # applies the saved/system theme before first paint
avatar-fallback.svg  # shown if the GitHub avatar fails to load
favicon.svg          # vinyl-disc favicon
vercel.json          # security headers for Vercel
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```powershell
npx serve .
```

## Features

- **Dark and light theme** with a toggle that remembers the visitor's choice
- **Responsive layout** for desktop, tablet, and mobile
- **Contact form** that sends a message directly through
  [FormSubmit](https://formsubmit.co), with inline success/error feedback
- **Subtle motion** — spinning vinyl, drifting notes, section reveals
- **Accessible** — keyboard focus styles, skip link, `aria` labels, and respect for
  `prefers-reduced-motion`

## Customizing

Most content is specific to the original owner:

- **Project list** lives in the `#work` section of the HTML — one block per project,
  each with a title, status label, description, tech tags, and a link.
- **Colors, spacing, and fonts** are CSS variables near the top of the stylesheet,
  so the palette can be re-themed in one place.
- **Contact destination** is the `CONTACT_EMAIL` constant in `main.js`. FormSubmit asks
  for a one-time email confirmation the first time a form is used.

## Deploying

The site is fully static, so it can be hosted anywhere that serves files — Vercel,
GitHub Pages, Netlify, Cloudflare Pages, or any web host. Upload the repository
contents to the hosting root and the site works as-is. `vercel.json` only applies on
Vercel.

## Credits

Design and content by [FTaKa36](https://github.com/FTaKa36). Fork maintained by
[chameleon54](https://github.com/chameleon54).
