import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../consts';

const require = createRequire(import.meta.url);
const font = (p: string) => fs.readFile(require.resolve(p));

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return [
		{ params: { slug: 'default' }, props: { title: SITE_TITLE, subtitle: SITE_DESCRIPTION } },
		...posts.map((p) => ({
			params: { slug: p.id },
			props: { title: p.data.title, subtitle: `${p.data.author} · blog.aossi.org` },
		})),
	];
};

export const GET: APIRoute = async ({ props }) => {
	const { title, subtitle } = props as { title: string; subtitle: string };
	const [grotesk, inter] = await Promise.all([
		font('@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff'),
		font('@fontsource/inter/files/inter-latin-400-normal.woff'),
	]);
	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					width: '1200px', height: '630px', display: 'flex', flexDirection: 'column',
					justifyContent: 'space-between', padding: '72px', boxSizing: 'border-box', background: '#0b0e14',
					borderTop: '12px solid #ff4f00', color: '#e8ecf2', fontFamily: 'Inter',
				},
				children: [
					{ type: 'div', props: { style: { display: 'flex', fontFamily: 'Space Grotesk', fontSize: 32, color: '#ff4f00', letterSpacing: '0.08em' }, children: 'AOSSI / BLOG' } },
					{ type: 'div', props: { style: { display: 'flex', width: '1056px', fontFamily: 'Space Grotesk', fontSize: 80, lineHeight: 1.1, fontWeight: 700 }, children: title } },
					{ type: 'div', props: { style: { display: 'flex', width: '1056px', fontSize: 30, color: '#8c96a8' }, children: subtitle } },
				],
			},
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{ name: 'Space Grotesk', data: grotesk, weight: 700, style: 'normal' },
				{ name: 'Inter', data: inter, weight: 400, style: 'normal' },
			],
		},
	);
	const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
	return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
