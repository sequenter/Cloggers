import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

import * as path from 'path';
import { defineConfig } from 'vite';

const dirname = import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@assets': path.resolve(dirname, './src/assets/'),
      '@components': path.resolve(dirname, './src/components/'),
      '@hooks': path.resolve(dirname, './src/hooks/'),
      '@providers': path.resolve(dirname, './src/providers/'),
      '@types': path.resolve(dirname, './src/types.ts'),
      '@utils': path.resolve(dirname, './src/utils/')
    }
  },
  base: '/Cloggers'
});
