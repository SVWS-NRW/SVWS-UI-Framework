import SvwsUiSecondaryMenu from '../../../components/Layout/Sidebar/SecondaryMenu.vue';

export default {
  title: 'SVWS UI/Layout/Sidebar/Secondary Menu',
  component: SvwsUiSecondaryMenu,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    SvwsUiSecondaryMenu,
  },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  data() {},
  methods: {},
  template: `
    <svws-ui-secondary-menu>
      Secondary Menu
    </svws-ui-secondary-menu>
  `,
});

export const Default = Template.bind({});
Default.args = {};
