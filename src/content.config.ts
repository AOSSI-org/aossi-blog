import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().default('Brach Janney'),
		draft: z.boolean().default(false),
		// Each image used in a post must be a free asset, credited here.
		credits: z
			.array(z.object({ image: z.string(), credit: z.string(), source: z.string().url() }))
			.optional(),
	}),
});

export const collections = { blog };
