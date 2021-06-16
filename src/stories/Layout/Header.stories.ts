import SvwsUiHeader from '../../components/Layout/Header.vue';

export default {
  title: 'SVWS UI/Layout/Header',
  component: SvwsUiHeader,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiHeader },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: `
      <svws-ui-header v-bind="args">This is a headline</svws-ui-header">
    `,
});

export const Default = Template.bind({});
Default.args = {
  badge: 'Badge',
};
