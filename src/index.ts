import {
  SvwsUiButton,
  SvwsUiCheckbox,
  SvwsUiProgressBar,
  SvwsUiTextInput,
  SvwsUiToggle,
  SvwsUiIcon,
  SvwsUiSidebarMenu,
  SvwsUiSidebarMenuHeader,
  SvwsUiSidebarMenuItem,
} from './components';

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
