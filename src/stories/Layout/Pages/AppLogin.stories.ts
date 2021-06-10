import SvwsUiAppLogin from '../../../components/Layout/Pages/AppLogin.vue';

export default {
  title: 'SVWS UI/Layout/Pages/Login',
  component: SvwsUiAppLogin,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    SvwsUiAppLogin,
  },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: '<svws-ui-app-login></svws-ui-app-login>',
});

export const Default = Template.bind({});
Default.args = {};
