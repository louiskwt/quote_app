import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["src/*.png", "src/*ico"],
      backgroundColor: "#F1DD8B",
      themeColor: "#F1DD8B",
      shortName: "曾氏公程公司",
      name: "曾氏公程公司 | 報價單",
    }),
  ],
});
