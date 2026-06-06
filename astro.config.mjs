import { fileURLToPath } from 'node:url';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkCaptions from 'remark-captions';
import remarkMath from 'remark-math';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  site: 'https://stenger.io',
  integrations: [svelte(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
    processor: unified({
      remarkPlugins: [
        remarkMath,
        [
          remarkCaptions,
          {
            external: { table: 'Caption:', code: 'Caption:', math: 'Caption:' },
            internal: { image: 'Caption:' }
          }
        ]
      ],
      rehypePlugins: [rehypeSlug, rehypeKatex, [rehypeAutolinkHeadings, { behavior: 'append' }]]
    })
  },
  vite: {
    plugins: [tailwindcss(), Icons({ compiler: 'svelte' })],
    resolve: {
      alias: {
        $lib: fileURLToPath(new URL('./src/lib', import.meta.url)),
        $assets: fileURLToPath(new URL('./src/assets', import.meta.url))
      }
    }
  }
});
