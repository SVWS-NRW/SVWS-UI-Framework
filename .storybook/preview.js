import '../src/assets/styles/index.css';
import ui from '../../SVWS-UI-Framework'
import { app } from '@storybook/vue3'
app.use(ui)

export const decorators = [
  (story) => ({
    components: { story, ui },
    template: '<story/>'
  })
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
