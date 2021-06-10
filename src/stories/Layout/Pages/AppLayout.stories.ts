import { action } from '@storybook/addon-actions';

import SvwsUiAppLayout from '../../../components/Layout/Pages/AppLayout.vue';
import SvwsUiSecondaryMenu from '../../../components/Layout/Sidebar/SecondaryMenu.vue';
import SvwsUiSidebarMenu from '../../../components/Layout/Sidebar/Menu.vue';
import SvwsUiSidebarMenuHeader from '../../../components/Layout/Sidebar/MenuHeader.vue';
import SvwsUiSidebarMenuItem from '../../../components/Layout/Sidebar/MenuItem.vue';

export default {
  title: 'SVWS UI/Layout/Pages/App',
  component: SvwsUiAppLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    SvwsUiAppLayout,
    SvwsUiSecondaryMenu,
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
  template: `
  <svws-ui-app-layout v-bind="args" :collapsed="isCollapsed">
    <template v-slot:sidebar>

      <svws-ui-sidebar-menu :collapsed="isCollapsed" @toggle="onToggle">
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
      </svws-ui-sidebar-menu>

    </template>

    <template v-slot:secondaryMenu>

      <svws-ui-secondary-menu>
        <template v-slot:header>Schülerverwaltung</template>
        <template v-slot:content>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </template>
      </svws-ui-secondary-menu>

    </template>

    <template v-slot:main>

    </template>
  </svws-ui-app-layout>
  `,
});

export const Default = Template.bind({});
Default.args = {};
