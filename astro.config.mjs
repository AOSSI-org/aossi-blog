// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rename, rmdir } from 'node:fs/promises';

// Astro only writes 404 and 500 as flat files. The 403 page is moved from 403/index.html
// to 403.html after the build so .htaccess can serve it with ErrorDocument 403 /403.html.
const flat403 = {
	name: 'flat-403',
	hooks: {
		'astro:build:done': async ({ dir }) => {
			await rename(new URL('403/index.html', dir), new URL('403.html', dir));
			await rmdir(new URL('403/', dir));
		},
	},
};

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.aossi.org',
	trailingSlash: 'always',
	// inlineStylesheets 'never': CSS always ships as a file, so the CSP's style-src 'self' never needs 'unsafe-inline'.
	build: { format: 'directory', inlineStylesheets: 'never' },
	integrations: [sitemap({ filter: (page) => !page.endsWith('/403/') }), flat403],
	markdown: {
		// Keep post text byte-for-byte: no automatic curly quotes or dashes.
		smartypants: false,
		shikiConfig: { theme: 'github-dark' },
	},
});
