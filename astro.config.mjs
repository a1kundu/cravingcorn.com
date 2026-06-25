import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://cravingcorn.com",
  base: process.env.BASE_PATH || "/",
});
