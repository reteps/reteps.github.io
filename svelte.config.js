import adapter from "@sveltejs/adapter-static"; 
import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite';

/* mdsvex plugins */
import relativeImages from "mdsvex-relative-images";
import rehypeSlug from 'rehype-slug'
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from 'remark-math'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
      extensions: ['.md'],
			smartypants: true,
			remarkPlugins: [relativeImages, remarkMath, remarkGfm],
			rehypePlugins: [rehypeSlug, rehypeKatexSvelte, [rehypeAutolinkHeadings, { behavior: 'append' }]]
    })
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null // TODO: make 404 page
		})
	}
};

export default config;
