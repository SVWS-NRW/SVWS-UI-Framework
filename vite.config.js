const path = require('path');
const vue = require('@vitejs/plugin-vue');

module.exports = {
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'SVWS UI',
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
