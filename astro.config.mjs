import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [svelte()],
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
});