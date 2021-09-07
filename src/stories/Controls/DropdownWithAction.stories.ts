import { action } from '@storybook/addon-actions';

import SvwsUiDropdownWithAction from '../../components/Controls/DropdownWithAction.vue';
import SvwsUiDropdownItem from '../../components/Controls/DropdownItem.vue';
import SvwsUiButton from '../../components/Controls/Button.vue';

export default {
  title: 'SVWS UI/Controls/Dropdown with action',
  component: SvwsUiDropdownWithAction,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'transparent'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiDropdownWithAction, SvwsUiDropdownItem, SvwsUiButton },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onClick: action('click') },
  template: `
    <svws-ui-dropdown-with-action v-bind="args">
      <template v-slot:actionButton><svws-ui-button v-bind="args" @click="onClick" dropdownAction>Button und Dropdown</svws-ui-button></template>
      <template v-slot:dropdownItems>
        <svws-ui-dropdown-item v-bind="args" @click="onClick" icon="home">Option 1</svws-ui-dropdown-item>
        <svws-ui-dropdown-item v-bind="args" @click="onClick">Option 2</svws-ui-dropdown-item>
        <svws-ui-dropdown-item v-bind="args" @click="onClick" :disabled="true">Option 3</svws-ui-dropdown-item>
        <svws-ui-dropdown-item v-bind="args" @click="onClick">Option 4</svws-ui-dropdown-item>
      </template>
    </svws-ui-dropdown-with-action>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  variant: 'primary',
  type: 'primary',
  dropdownDisabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  variant: 'secondary',
  type: 'secondary',
  dropdownDisabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  disabled: false,
  variant: 'danger',
  type: 'danger',
  dropdownDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  variant: 'primary',
  type: 'primary',
  dropdownDisabled: true,
};
