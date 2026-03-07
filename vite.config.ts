import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

/**
 * Vite plugin to conditionally inject analytics script
 * Only injects if VITE_ANALYTICS_ENDPOINT and VITE_ANALYTICS_WEBSITE_ID are set
 */
function vitePluginAnalytics(): Plugin {
  return {
    name: "analytics-injector",
    transformIndexHtml(html) {
      const analyticsEndpoint = process.env.VITE_ANALYTICS_ENDPOINT;
      const websiteId = process.env.VITE_ANALYTICS_WEBSITE_ID;

      // Only inject analytics script if both env vars are set
      if (!analyticsEndpoint || !websiteId) {
        return html;
      }

      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              defer: true,
              src: `${analyticsEndpoint}/umami`,
              "data-website-id": websiteId,
            },
            injectTo: "body",
          },
        ],
      };
    },
  };
}


const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  vitePluginAnalytics(),
];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
