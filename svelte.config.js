import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex'
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from 'remark-math'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.svx'],
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatexSvelte]
	})],

	extensions: ['.svelte', '.svx'],

	kit: {
		adapter: adapter()
	}
};

export default config;
