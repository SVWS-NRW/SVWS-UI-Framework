import { action } from '@storybook/addon-actions';

import SvwsUiCheckbox from '../../components/Controls/Checkbox.vue';

export default {
  title: 'SVWS UI/Controls/Checkbox',
  component: SvwsUiCheckbox,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiCheckbox },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onInput: action('input') },
  template:
    '<svws-ui-checkbox v-bind="args" @input="onInput">Checkbox</svws-ui-checkbox>',
});

export const Checked = Template.bind({});
Checked.args = {
  value: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  value: false,
};
