import * as components from './components';

import './assets/styles/index.css';

export default {
  install: (Vue: any) => {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key]);
    });
  },
};

export * from './components';
