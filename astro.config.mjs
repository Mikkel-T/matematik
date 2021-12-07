// @ts-check

/** @type {import('astro').AstroUserConfig} */
export default {
  buildOptions: {
    site: 'https://matematik.mikkel-t.com',
    sitemap: true,
  },
  renderers: ['@astrojs/renderer-svelte', '@astrojs/renderer-react'],
};
