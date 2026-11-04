# NORTHHHERN LABS

The company website for NORTHHHERN LABS, a startup and the parent company behind KLAVE and the products to come.

Live: https://northhhernlabs.vercel.app

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `about.html` | About and founder |
| `products.html` | Products (KLAVE and what's next) |
| `market.html` | Market opportunity |
| `contact.html` | Contact |

## Shared files

- `style.css`: the design for every page (colors, layout, mobile menu)
- `script.js`: scroll animations and the mobile menu
- `logo-mark.png`: the N mark, used in the nav, footer and favicon
- `logo.jpg`: the full logo, used for link previews

All files sit in the repo root, next to `index.html`. A missing file shows as a 404 on Vercel.

## Editing

- Change colors, spacing or fonts in `style.css`. The color variables are at the top, under `:root`.
- Change text in the page's own `.html` file.
- Adding a page: copy an existing page, then add its link to the `<nav>` and the footer in every page.
- Adding a product: add a card to `products.html`.

## Contact details used on the site

- Email: Northhhernlabs@gmail.com
- KLAVE: https://nero-ai.xyz

## Deploying

The site is plain HTML, CSS and JS, with no build step. Push to GitHub and Vercel deploys it.

Vercel blocks deploys when the git commit email doesn't match the GitHub account's email. Set it before committing:

```
git config user.email "beatsbynorth21@gmail.com"
```

## Stack

HTML, CSS and vanilla JavaScript. Fonts: Inter and JetBrains Mono (Google Fonts).

© 2026 NORTHHHERN LABS
