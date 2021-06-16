import SvwsUi from '../.';
import { app } from '@storybook/vue3';

import '../src/assets/styles/index.css';

app.use(SvwsUi);

export const decorators = [
  (story) => ({
    components: { story, SvwsUi },
    template: '<story/>',
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
