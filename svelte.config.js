import adapter from "@sveltejs/adapter-static"; 
import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite';

/* mdsvex plugins */
import relativeImages from "mdsvex-relative-images"; /* Relative image paths */
import rehypeKatexSvelte from "rehype-katex-svelte"; /* LaTeX */
import remarkMath from 'remark-math' /* LaTeX */
import rehypeSlug from 'rehype-slug' /* Autolink headings */
import rehypeAutolinkHeadings from 'rehype-autolink-headings' /* Autolink headings */
import remarkCaptions from 'remark-captions' /* Captions */
import remarkAttr from "remark-attr" /* HTML attributes for markdown */

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
      extensions: ['.md'],
			smartypants: true,
			remarkPlugins: [
				relativeImages,
				remarkMath,
				remarkAttr,
				[remarkCaptions, { external: { table: 'Caption:', code: 'Caption:', math: 'Caption:'}, internal: { image: 'Caption:' }}]
			],
			rehypePlugins: [rehypeSlug, 
				rehypeKatexSvelte, 
				[rehypeAutolinkHeadings, { behavior: 'append' }],
			]
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
