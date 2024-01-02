import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteWasmPlugin from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteWasmPlugin()],
});
