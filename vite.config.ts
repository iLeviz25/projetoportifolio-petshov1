
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// If you continue to get EMFILE errors, consider increasing your OS file descriptor limit, e.g.:
// On Linux or macOS, try running: ulimit -n 4096  (or larger number)

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: false,
      interval: 1000,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/dist/**',
        '**/build/**',
        '**/.cache/**',
        '**/.next/**',
        '**/.vercel/**',
        '**/.output/**',
        '**/.turbo/**',
        '**/coverage/**',
        '**/.idea/**',
        '**/.vscode/**',
        '**/tmp/**',
        '**/temp/**',
        '**/.DS_Store',
        '**/*.log'
      ],
      // Limit how many files can be watched (default is 10000), lower this if you still get EMFILE
      maxFiles: 512,
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
