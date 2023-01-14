import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import viteCompression from 'vite-plugin-compression';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), imagetools({ force: true }), viteCompression()],
  server: {
    fs: {
      allow: ['blog']
    }
  },
  resolve: {
    alias: {
      '$img': '/src/img',
    }
  }
};

export default config;
