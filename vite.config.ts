import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Your specific plugins might vary

// vitejs.dev
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This explicitly tells Vite to listen on all addresses (0.0.0.0)
  },
});
