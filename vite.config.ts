import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';
import fs from 'fs';
import path from 'path/posix';
import graphql from '@rollup/plugin-graphql';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin({ cache: false }), svgLoader(), graphql()],
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
      {
        find: '@base',
        replacement: path.resolve(path.dirname(''), 'src/components/Base'),
      },
      {
        find: '@store',
        replacement: path.resolve(path.dirname(''), 'src/stores'),
      },
      {
        find: '@graphql',
        replacement: path.resolve(path.dirname(''), 'src/graphql'),
      },
      {
        find: '@plugins',
        replacement: path.resolve(path.dirname(''), 'src/plugins'),
      },
    ],
  },
});
