import SvwsUiBadge from '../../components/Typography/Badge.vue';

export default {
  title: 'SVWS UI/Typography/Badge',
  component: SvwsUiBadge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'success', 'error', 'light', 'highlight'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['big', 'medium', 'normal', 'small'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiBadge },
  setup() {
    return { args };
  },
  template: '<svws-ui-badge v-bind="args">Badge</svws-ui-badge>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'normal',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'normal',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  size: 'normal',
};

export const Highlight = Template.bind({});
Highlight.args = {
  variant: 'highlight',
  size: 'normal',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  size: 'normal',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  size: 'small',
};

export const Normal = Template.bind({});
Normal.args = {
  variant: 'primary',
  size: 'normal',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'primary',
  size: 'medium',
};

export const Big = Template.bind({});
Big.args = {
  variant: 'primary',
  size: 'big',
};
