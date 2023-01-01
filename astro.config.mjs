import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

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
    plugins: [Icons({ compiler: "svelte" })],
    ssr: {
      noExternal: ["solid-toast"],
    },
  },
});
