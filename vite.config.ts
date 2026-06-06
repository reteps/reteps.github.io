import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import viteCompression from 'vite-plugin-compression';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit(), imagetools({ force: true }), viteCompression()],
  server: {
    fs: {
      allow: ['blog']
    }
  },
  resolve: {
    alias: {
      $img: '/src/img'
    }
  }
};

export default config;
