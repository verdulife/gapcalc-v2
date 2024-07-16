import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), db()],
  output: "server",
  adapter: netlify()
});