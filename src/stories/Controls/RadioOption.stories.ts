import { action } from '@storybook/addon-actions';

import SvwsUiRadioOption from '../../components/Controls/RadioOption.vue';

export default {
  title: 'SVWS UI/Controls/Radio Option',
  component: SvwsUiRadioOption,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiRadioOption },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onClick: action('click') },
  template: '<svws-ui-radio-option v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  value: 'value',
  label: 'Option',
  statistic: false,
  disabled: false,
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  name: 'name',
  value: 'value',
  label: 'Option',
  statistic: false,
  disabled: false,
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'name',
  value: 'value',
  label: 'Option',
  statistic: false,
  disabled: true,
  checked: false,
};

export const Statistic = Template.bind({});
Statistic.args = {
  name: 'name',
  value: 'value',
  label: 'Option',
  statistic: true,
  disabled: false,
  checked: false,
};
