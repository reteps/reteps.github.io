import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [enhancedImages(), tailwindcss(), Icons({ compiler: 'svelte' }), sveltekit()],
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
});
