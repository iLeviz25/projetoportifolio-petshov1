
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// If you continue to get EMFILE errors, consider increasing your OS file descriptor limit.
// On Linux or macOS, try running: ulimit -n 4096  (or a larger number)

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: false, // Use "true" if you are on a network filesystem that doesn't support native watchers
      interval: 1000,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/dist/**',
        '**/build/**',
        // Ignore more folders if needed
        '**/.cache/**',
        '**/.next/**',
        '**/.vercel/**',
        '**/.output/**'
      ],
      // Limit how many files can be watched (default is 10000), lower this if you still get EMFILE
      maxFiles: 2048,
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['lovable-tagger']
  }
}));
