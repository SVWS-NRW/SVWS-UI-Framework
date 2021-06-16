import { action } from '@storybook/addon-actions';

import SvwsUiSidebarMenuItem from '../../../components/Layout/Sidebar/MenuItem.vue';

export default {
  title: 'SVWS UI/Layout/Sidebar/Menu Item',
  component: SvwsUiSidebarMenuItem,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#2B4452' }],
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiSidebarMenuItem },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onClick: action('click') },
  template:
    '<svws-ui-sidebar-menu-item v-bind="args" @click="onClick">Menu Item</svws-ui-sidebar-menu-item>',
});

export const Default = Template.bind({});
Default.args = {
  icon: 'team',
  active: false,
  collapsed: false,
  subline: '',
};

export const Active = Template.bind({});
Active.args = {
  icon: 'team',
  active: true,
  collapsed: false,
  subline: '',
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  icon: 'team',
  active: false,
  collapsed: true,
  subline: '',
};

export const Subline = Template.bind({});
Subline.args = {
  icon: 'team',
  active: false,
  collapsed: false,
  subline: 'Subline',
};
