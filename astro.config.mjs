import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import basicSsl from "@vitejs/plugin-basic-ssl";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
    optimizeDeps: { exclude: ["fsevents"] },
  },
  output: "server",
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
});
