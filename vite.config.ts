import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';
import fs from 'fs';
import path from 'path/posix';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin({ cache: false }), svgLoader()],
  base: './',
  server: {
    https: {
      key: fs.readFileSync('./.cert/localhost-key.pem'),
      cert: fs.readFileSync('./.cert/localhost.pem'),
    },
  },
  resolve: {
    alias: [
      {
        find: '@svg',
        replacement: path.resolve(path.dirname(''), 'src/assets/svg'),
      },
    ],
  },
});
