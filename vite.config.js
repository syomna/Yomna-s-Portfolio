import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Yomna-s-Portfolio/",
  plugins: [react()],
  mode: "prodution",
  build: {
    minify: false,
  },
});
