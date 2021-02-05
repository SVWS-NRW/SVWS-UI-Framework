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
  props: Object.keys(argTypes),
  methods: { onClick: action('click') },
  template:
    '<svws-ui-button v-bind="$props" @click="onClick">Button</svws-ui-button>',
});

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'primary',
  disabled: true,
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  disabled: false,
};

export const Transparent = Template.bind({});
Transparent.args = {
  type: 'transparent',
  disabled: false,
};
