// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.aossi.org',
	trailingSlash: 'always',
	build: { format: 'directory' },
	integrations: [sitemap()],
	markdown: {
		// Keep post text byte-for-byte: no automatic curly quotes or dashes.
		smartypants: false,
		shikiConfig: { theme: 'github-dark' },
	},
});
