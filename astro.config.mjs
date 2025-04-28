// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tatyquebralayout.github.io",
  base: "/blog_GitAdventure",
  outDir: "./dist",
  build: {
    assets: "_assets",
  },
  integrations: [],
});
