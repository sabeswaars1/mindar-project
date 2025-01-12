import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [
    react(),
    basicSsl(), // Enable HTTPS with the plugin
  ],
  server: {
    host: true, // Allow external devices to connect
    port: 3000, // Optional: Customize the port
  },
});
