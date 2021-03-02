import SvwsUiProgressBar from '../../components/Controls/ProgressBar.vue';

export default {
  title: 'SVWS UI/Controls/Progress Bar',
  component: SvwsUiProgressBar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
    },
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiProgressBar },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template:
    '<svws-ui-progress-bar v-bind="args">Progress Bar</svws-ui-progress-bar>',
});

export const Default = Template.bind({});
Default.args = {
  progress: 82,
  size: 'default',
};

export const Small = Template.bind({});
Small.args = {
  progress: 82,
  size: 'small',
};
