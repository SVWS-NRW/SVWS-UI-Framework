import { action } from '@storybook/addon-actions';

import SvwsUiTabButton from '../../components/Controls/TabButton.vue';

export default {
  title: 'SVWS UI/Controls/Tab Buttton',
  component: SvwsUiTabButton,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiTabButton },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onClick: action('click') },
  template: `<svws-ui-tab-button
        v-bind="args"
      >
        Individualdaten
      </svws-ui-tab-button>`,
});

export const Default = Template.bind({});
Default.args = {
  active: false,
  disabled: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  active: false,
  disabled: true,
};
