import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://matematik.mikkel-t.com",
  integrations: [
    svelte(),
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    solid(),
  ],
  vite: {
    ssr: {
      noExternal: ["solid-toast"],
    },
  },
});
