import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import db from "@astrojs/db";
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind(), svelte(), db()],
  output: "server",
  adapter: netlify()
});