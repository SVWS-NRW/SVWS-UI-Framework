import SvwsUiIcon from '../../components/Layout/Icon.vue';

export default {
  title: 'SVWS UI/Layout/Icon',
  component: SvwsUiIcon,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['line', 'fill'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiIcon },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: '<svws-ui-icon v-bind="args" />',
});

export const Line = Template.bind({});
Line.args = {
  icon: 'home',
  variant: 'line',
};

export const Fill = Template.bind({});
Fill.args = {
  icon: 'home',
  variant: 'fill',
};
