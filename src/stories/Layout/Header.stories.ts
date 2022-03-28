import SvwsUiHeader from '../../components/Layout/Header.vue';

export default {
  title: 'SVWS UI/Layout/Header',
  component: SvwsUiHeader,
  argTypes: {
    badgeVariant: {
      control: {
        type: 'select',
        options: ['primary', 'success', 'error', 'light', 'highlight'],
      },
    },
    badgeSize: {
      control: {
        type: 'select',
        options: ['big', 'medium', 'normal', 'small'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiHeader },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: '<svws-ui-header v-bind="args">This is a headline</svws-ui-header>',
});

export const Default = Template.bind({});
Default.args = {
  badge: 'Badge',
  badgeVariant: 'highlight',
  badgeSize: 'normal',
};
