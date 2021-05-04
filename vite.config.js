import { resolve } from 'path';
const vue = require('@vitejs/plugin-vue');

module.exports = {
  plugins: [vue()],
  resolve: {
    alias: {
      '~remixicon/fonts/remixicon.css': resolve(
        __dirname,
        'node_modules/remixicon/fonts/remixicon.css'
      ),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SvwsUI',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};
