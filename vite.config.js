import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'features': path.resolve(__dirname, 'src/features'),
      api: path.resolve(__dirname, 'src/api'),
      constants: path.resolve(__dirname, 'src/constants'),
    }
  }
});
