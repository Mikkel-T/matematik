import { defineConfig } from 'astro/config';

export default defineConfig({
  buildOptions: {
    site: 'https://matematik.mikkel-t.com',
    sitemap: true,
  },
  renderers: ['@astrojs/renderer-svelte', '@astrojs/renderer-react'],
});
