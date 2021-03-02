import { action } from '@storybook/addon-actions';

import SvwsUiTextInput from '../../components/Controls/TextInput.vue';

export default {
  title: 'SVWS UI/Controls/Text Input',
  component: SvwsUiTextInput,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiTextInput },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onInput: action('input') },
  template: '<svws-ui-text-input v-bind="args" @input="onInput"/>',
});

export const Empty = Template.bind({});
Empty.args = {
  value: '',
  placeholder: 'Text Input Placeholder',
};

export const Filled = Template.bind({});
Filled.args = {
  value: 'Text Input Value',
  placeholder: 'Text Input Placeholder',
};
