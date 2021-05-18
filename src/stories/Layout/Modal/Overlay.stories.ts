import { action } from '@storybook/addon-actions';

import SvwsUiOverlay from '../../../components/Layout/Modal/Overlay.vue';

export default {
  title: 'SVWS UI/Layout/Modal/Overlay',
  component: SvwsUiOverlay,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiOverlay },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onInput: action('input') },
  template:
    '<div class="h-screen w-screen"><svws-ui-overlay /></div>',
});

export const Default = Template.bind({});
Default.args = {};
