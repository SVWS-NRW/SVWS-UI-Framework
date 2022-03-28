import './assets/styles/index.css';
import { App, Plugin } from 'vue';
import * as components from './components';

const install: Exclude<Plugin['install'], undefined> = function install(
  app: App
) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

export default install;
