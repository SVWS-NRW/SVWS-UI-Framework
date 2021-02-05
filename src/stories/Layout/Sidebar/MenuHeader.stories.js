import { action } from '@storybook/addon-actions';

import SvwsUiSidebarMenuHeader from '../../../components/Layout/Sidebar/MenuHeader.vue';

export default {
  title: 'SVWS UI/Layout/Sidebar/Menu Header',
  component: SvwsUiSidebarMenuHeader,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiSidebarMenuHeader },
  props: Object.keys(argTypes),
  methods: { onClick: action('click') },
  template:
    '<svws-ui-sidebar-menu-header v-bind="$props" @click="onClick">Menu Header</svws-ui-sidebar-menu-header>',
});

export const Default = Template.bind({});
Default.args = {
  collapsed: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  collapsed: true,
};
