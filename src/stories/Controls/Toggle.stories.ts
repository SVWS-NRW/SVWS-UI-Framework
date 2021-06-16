import { action } from '@storybook/addon-actions';

import SvwsUiToggle from '../../components/Controls/Toggle.vue';

export default {
  title: 'SVWS UI/Controls/Toggle',
  component: SvwsUiToggle,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiToggle },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onInput: action('input') },
  template:
    '<svws-ui-toggle v-bind="args" @input="onInput">Toggle</svws-ui-toggle>',
});

export const Checked = Template.bind({});
Checked.args = {
  value: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  value: false,
};
