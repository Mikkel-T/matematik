import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://matematik.mikkel-t.com',
  integrations: [
    react(),
    svelte(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    sitemap(),
  ],
});
