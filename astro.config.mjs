// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 部署到 GitHub Pages 项目站点时取消注释，例如：
  // site: "https://modan1998.github.io",
  // base: "/portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
