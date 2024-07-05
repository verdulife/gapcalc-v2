import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "server",
  adapter: netlify()
});