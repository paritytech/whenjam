import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */ const config = {
	plugins: [
		sveltekit({
			// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
			extensions: ['.svelte', '.md'],
			preprocess: [
				mdsvex({
					// The default mdsvex extension is .svx; this overrides that.
					extensions: ['.md'],
					// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
					rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
				})
			],
			adapter: adapter(),
			prerender: {
				entries: ['*']
			}
		})
	],
	server: { fs: { allow: ['.'] } }
};

export default config;
