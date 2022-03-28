import { action } from '@storybook/addon-actions';

import SvwsUiSidebarMenu from '../../../components/Layout/Sidebar/Menu.vue';
import SvwsUiSidebarMenuHeader from '../../../components/Layout/Sidebar/MenuHeader.vue';
import SvwsUiSidebarMenuItem from '../../../components/Layout/Sidebar/MenuItem.vue';

export default {
  title: 'SVWS UI/Layout/Sidebar/Menu',
  component: SvwsUiSidebarMenu,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#F0F4F7' }],
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    SvwsUiSidebarMenu,
    SvwsUiSidebarMenuHeader,
    SvwsUiSidebarMenuItem,
  },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  data() {
    return { isCollapsed: this.args.collapsed };
  },
  methods: {
    onToggle(value) {
      this.isCollapsed = value;

      action('toggle')(value);
    },
  },
  template: `<svws-ui-sidebar-menu :collapsed="isCollapsed" @toggle="onToggle">
      <template v-slot:header>
        <svws-ui-sidebar-menu-header :collapsed="isCollapsed">SVWS-NRW</svws-ui-sidebar-menu-header>
      </template>
      <template v-slot:default>
        <svws-ui-sidebar-menu-item icon="team" :active="true" :collapsed="isCollapsed">Schüler</svws-ui-sidebar-menu-item>
        <svws-ui-sidebar-menu-item icon="building" :collapsed="isCollapsed">Schule</svws-ui-sidebar-menu-item>
        <svws-ui-sidebar-menu-item icon="book-open" :collapsed="isCollapsed">Kataloge</svws-ui-sidebar-menu-item>
        <svws-ui-sidebar-menu-item icon="donut-chart" :collapsed="isCollapsed">Extras</svws-ui-sidebar-menu-item>
      </template>
      <template v-slot:footer>
        <svws-ui-sidebar-menu-item icon="settings-2" :collapsed="isCollapsed">Einstellungen</svws-ui-sidebar-menu-item>
        <svws-ui-sidebar-menu-item icon="logout-box" subline="Schule XYZ" :collapsed="isCollapsed">Administrator</svws-ui-sidebar-menu-item>
      </template>
    </svws-ui-sidebar-menu>`,
});

export const Default = Template.bind({});
Default.args = {
  collapsed: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  collapsed: true,
};
