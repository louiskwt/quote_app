import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["src/*.png", "src/*ico"],
      manifest: {
        name: "曾氏工程報價系統",
        short_name: "曾氏報價單",
        display: "standalone",
        background_color: "F1DD8B",
        theme_color: "F1DD8B",
        icons: [
          {
            src: "src/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
