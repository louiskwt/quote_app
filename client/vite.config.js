import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["src/*.png", "src/*ico"],
      base: "/",
      manifest: {
        name: "曾氏工程報價系統",
        short_name: "曾氏報價單",
        start_url: "/",
        display: "standalone",
        background_color: "F1DD8B",
        theme_color: "F1DD8B",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
