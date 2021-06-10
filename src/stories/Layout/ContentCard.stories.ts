import SvwsUiContentCard from '../../components/Layout/ContentCard.vue';

export default {
  title: 'SVWS UI/Layout/Content Card',
  component: SvwsUiContentCard,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiContentCard },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template:
    '<svws-ui-content-card v-bind="args">Hier kommt content rein</svws-ui-content-card>',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Basisdaten',
};
