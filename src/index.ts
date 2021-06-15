import {
  SvwsUiButton,
  SvwsUiCheckbox,
  SvwsUiProgressBar,
  SvwsUiTextInput,
  SvwsUiTextareaInput,
  SvwsUiDropdown,
  SvwsUiDropdownItem,
  SvwsUiDropdownWithAction,
  SvwsUiOverlay,
  SvwsUiModal,
  SvwsUiBadge,
  SvwsUiRadioGroup,
  SvwsUiRadioOption,
  SvwsUiAppLayout,
  SvwsUiToggle,
  SvwsUiIcon,
  SvwsUiSidebarMenu,
  SvwsUiSidebarMenuHeader,
  SvwsUiSidebarMenuItem,
  SvwsUiSecondaryMenu,
  SvwsUiTab,
  SvwsUiTabBar,
  SvwsUiSelectInput,
  SvwsUiTabButton,
  SvwsUiContentCard,
  SvwsUiHeader,
} from './components';

import './assets/styles/index.css';

export default {
  install: (Vue: any) => {
    Vue.component('svws-ui-button', SvwsUiButton);
    Vue.component('svws-ui-checkbox', SvwsUiCheckbox);
    Vue.component('svws-ui-progress-bar', SvwsUiProgressBar);
    Vue.component('svws-ui-text-input', SvwsUiTextInput);
    Vue.component('svws-ui-textarea-input', SvwsUiTextareaInput);
    Vue.component('svws-ui-dropdown', SvwsUiDropdown);
    Vue.component('svws-ui-dropdown-item', SvwsUiDropdownItem);
    Vue.component('svws-ui-dropdown-with-action', SvwsUiDropdownWithAction);
    Vue.component('svws-ui-overlay', SvwsUiOverlay);
    Vue.component('svws-ui-modal', SvwsUiModal);
    Vue.component('svws-ui-badge', SvwsUiBadge);
    Vue.component('svws-ui-radio-group', SvwsUiRadioGroup);
    Vue.component('svws-ui-radio-option', SvwsUiRadioOption);
    Vue.component('svws-ui-app-layout', SvwsUiAppLayout);
    Vue.component('svws-ui-toggle', SvwsUiToggle);
    Vue.component('svws-ui-icon', SvwsUiIcon);
    Vue.component('svws-ui-sidebar-menu', SvwsUiSidebarMenu);
    Vue.component('svws-ui-sidebar-menu-header', SvwsUiSidebarMenuHeader);
    Vue.component('svws-ui-sidebar-menu-item', SvwsUiSidebarMenuItem);
    Vue.component('svws-ui-secondary-menu', SvwsUiSecondaryMenu);
    Vue.component('svws-ui-tab', SvwsUiTab);
    Vue.component('svws-ui-tab-bar', SvwsUiTabBar);
    Vue.component('svws-ui-select-input', SvwsUiSelectInput);
    Vue.component('svws-ui-tab-button', SvwsUiTabButton);
    Vue.component('svws-ui-content-card', SvwsUiContentCard);
    Vue.component('svws-ui-header', SvwsUiHeader);
  },
};
