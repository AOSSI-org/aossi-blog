# aossi-blog

Source for the AOSSI blog at https://blog.aossi.org/. The main site is https://aossi.org/.

Built with [Astro](https://astro.build/) 7. Posts are Markdown files in `src/content/blog/`.
The file name is the URL: `patents-are-fooling-themselves.md` is served at
`/patents-are-fooling-themselves/`.

## Writing a post

1. Add `src/content/blog/<slug>.md` with this front matter:

   ```yaml
   ---
   title: "Post title"
   description: "One or two sentences for search results and link cards."
   pubDate: 2026-10-19
   author: "Brach Janney"
   # Only free assets (for example NASA public-domain images), each credited:
   # credits:
   #   - image: "Hero image"
   #     credit: "NASA"
   #     source: "https://images.nasa.gov/..."
   ---
   ```

2. Open a pull request. A post is published when its reviewed pull request is merged.

## Build

Requires Node.js 22.22 or newer.

```sh
npm ci
npm run build   # output in dist/
```

The build produces the post pages, `rss.xml`, `sitemap-index.xml`, Open Graph images
under `/og/`, and `robots.txt` (all crawlers allowed, including AI crawlers).

The site has no analytics, no cookies, no ad tech and no third-party requests.
Fonts (Space Grotesk and Inter, SIL Open Font License) are self-hosted through Fontsource.

## Deploy

Hosted on Hostinger as the website `blog.aossi.org`. The contents of `dist/` are the
document root (`public_html`), including `.htaccess`, which forces HTTPS.
