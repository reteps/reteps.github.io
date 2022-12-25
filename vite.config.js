import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['blog']
    }
  }
};

export default config;
