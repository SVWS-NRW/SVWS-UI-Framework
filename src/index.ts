import SvwsUiButton from './components/Controls/Button.vue';
import SvwsUiCheckbox from './components/Controls/Checkbox.vue';
import SvwsUiProgressBar from './components/Controls/ProgressBar.vue';
import SvwsUiTextInput from './components/Controls/TextInput.vue';
import SvwsUiToggle from './components/Controls/Toggle.vue';

import SvwsUiIcon from './components/Layout/Icon.vue';

import SvwsUiSidebarMenu from './components/Layout/Sidebar/Menu.vue';
import SvwsUiSidebarMenuHeader from './components/Layout/Sidebar/MenuHeader.vue';
import SvwsUiSidebarMenuItem from './components/Layout/Sidebar/MenuItem.vue';

import './assets/styles/index.css';

export default {
  install: (Vue: any) => {
    Vue.component('svws-ui-button', SvwsUiButton);
    Vue.component('svws-ui-checkbox', SvwsUiCheckbox);
    Vue.component('svws-ui-progress-bar', SvwsUiProgressBar);
    Vue.component('svws-ui-text-input', SvwsUiTextInput);
    Vue.component('svws-ui-toggle', SvwsUiToggle);
    Vue.component('svws-ui-icon', SvwsUiIcon);
    Vue.component('svws-ui-sidebar-menu', SvwsUiSidebarMenu);
    Vue.component('svws-ui-sidebar-menu-header', SvwsUiSidebarMenuHeader);
    Vue.component('svws-ui-sidebar-menu-item', SvwsUiSidebarMenuItem);
  },
};
