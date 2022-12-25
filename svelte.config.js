import adapter from "@sveltejs/adapter-static"; 
import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
      extensions: ['.md'],
			smartypants: true
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
