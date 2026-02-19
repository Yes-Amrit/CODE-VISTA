import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // your backend port
        changeOrigin: true,
        secure: false,
      },
      "/piston": {
        target: "https://piston.rs/api/v2",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/piston/, ""),
      },
    },
  },
});
