import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';
import fs from 'fs';
import path from 'path';
import graphql from '@rollup/plugin-graphql';
import VueTypeImports from 'vite-plugin-vue-type-imports';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({ cache: false }),
    svgLoader(),
    graphql(),
    VueTypeImports(),
  ],
  base: './',
  server: {
    host: 'localhost',
    https: {
      key: fs.readFileSync('./.cert/localhost-key.pem'),
      cert: fs.readFileSync('./.cert/localhost.pem'),
      //key: fs.readFileSync('/etc/letsencrypt/live/cobaltcastle.cc/privkey.pem'),
      //cert: fs.readFileSync('/etc/letsencrypt/live/cobaltcastle.cc/fullchain.pem')
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
        find: '@stores',
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
      {
        find: '@stores',
        replacement: path.resolve(path.dirname(''), 'src/stores'),
      },
      {
        find: '@types',
        replacement: path.resolve(path.dirname(''), 'src/types.ts'),
      },
    ],
  },
});
