import { action } from '@storybook/addon-actions';

import SvwsUiSelectInput from '../../components/Controls/SelectInput.vue';

export default {
  title: 'SVWS UI/Controls/Select Input',
  component: SvwsUiSelectInput,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiSelectInput },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onInput: action('input') },
  template: `<svws-ui-select-input v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select Input Placeholder',
  icon: null,
  options: [
    { index: 'option1', label: 'Option 1' },
    { index: 'option2', label: 'Option 2' },
    { index: 'option3', label: 'Option 3' },
  ],
  valid: true,
  disabled: false,
};
