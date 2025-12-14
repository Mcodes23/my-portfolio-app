import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change base to '/' so it works on Vercel's root domain
  base: "/",
  build: {
    // Force Vite to output to "build" instead of "dist" to match Vercel defaults
    outDir: "build",
  },
});
