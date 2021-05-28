import { action } from '@storybook/addon-actions';

import SvwsUiDropdown from '../../components/Controls/Dropdown.vue';
import SvwsUiDropdownItem from '../../components/Controls/DropdownItem.vue';

export default {
  title: 'SVWS UI/Controls/Dropdown',
  component: SvwsUiDropdown,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiDropdown, SvwsUiDropdownItem },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onClick: action('click') },
  template: `
    <svws-ui-dropdown v-bind="args" @click="onClick">
      <template v-slot:dropdownButton>More options</template>
      <template v-slot:dropdownItems>
        <svws-ui-dropdown-item v-bind="args" @click="onClick" icon="home">Option 1</svws-ui-dropdown-item>
        <svws-ui-dropdown-item v-bind="args" @click="onClick">Option 2</svws-ui-dropdown-item>
        <svws-ui-dropdown-item v-bind="args" @click="onClick" :disabled>Option 3</svws-ui-dropdown-item>
        <svws-ui-dropdown-item v-bind="args" @click="onClick">Option 4</svws-ui-dropdown-item>
      </template>
    </svws-ui-dropdown>
    `,
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
};
