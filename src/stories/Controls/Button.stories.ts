import { action } from '@storybook/addon-actions';

import SvwsUiButton from '../../components/Controls/Button.vue';

export default {
  title: 'SVWS UI/Controls/Button',
  component: SvwsUiButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'transparent'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiButton },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onClick: action('click') },
  template:
    '<svws-ui-button v-bind="args" @click="onClick">Button</svws-ui-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  disabled: false,
  dropdownAction: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  disabled: false,
  dropdownAction: false,
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  disabled: false,
  dropdownAction: false,
};

export const Transparent = Template.bind({});
Transparent.args = {
  type: 'transparent',
  disabled: false,
  dropdownAction: false,
};

export const DropdownAction = Template.bind({});
DropdownAction.args = {
  type: 'primary',
  disabled: false,
  dropdownAction: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'primary',
  disabled: true,
  dropdownAction: false,
};