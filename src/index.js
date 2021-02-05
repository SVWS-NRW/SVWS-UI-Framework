import './assets/styles/index.css';

import * as components from './components';

export default {
  install: (app) => {
    for (let component of components) {
      app.use(component);
    }
  },
};

export * from './components';
