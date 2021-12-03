import { action } from '@storybook/addon-actions';

import SvwsUiTextInput from '../../components/Controls/TextInput.vue';

export default {
  title: 'SVWS UI/Controls/Text Input',
  component: SvwsUiTextInput,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiTextInput },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onInput: action('input') },
  template: '<svws-ui-text-input v-bind="args" @input="onInput" />',
});

export const Empty = Template.bind({});
Empty.args = {
  type: 'text',
  value: '',
  placeholder: 'Text Input Placeholder',
  icon: null,
  valid: true,
  required: false,
  statistic: false,
  readonly: false,
  disabled: false,
};

export const Filled = Template.bind({});
Filled.args = {
  type: 'text',
  value: 'Text Input Value',
  placeholder: 'Text Input Placeholder',
  icon: null,
  valid: true,
  required: false,
  statistic: false,
  readonly: false,
  disabled: false,
};

export const Invalid = Template.bind({});
Invalid.args = {
  type: 'text',
  value: 'Text Input Value',
  placeholder: 'Text Input Placeholder',
  icon: null,
  valid: false,
  required: false,
  statistic: false,
  readonly: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  value: '',
  placeholder: 'Text Input Placeholder',
  icon: null,
  valid: true,
  required: false,
  statistic: false,
  readonly: false,
  disabled: true,
};

export const Statistic = Template.bind({});
Statistic.args = {
  type: 'text',
  value: '',
  placeholder: 'Text Input Placeholder',
  icon: null,
  valid: true,
  required: false,
  statistic: true,
  readonly: false,
  disabled: false,
};
