import { action } from '@storybook/addon-actions';

import SvwsUiTextareaInput from '../../components/Controls/TextareaInput.vue';

export default {
  title: 'SVWS UI/Controls/Textarea Input',
  component: SvwsUiTextareaInput,
  argTypes: {
    resizeable: {
      control: {
        type: 'select',
        options: ['both', 'horizontal', 'vertical', 'none'],
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiTextareaInput },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onInput: action('input') },
  template: '<svws-ui-textarea-input v-bind="args" @input="onInput" />',
});

export const Empty = Template.bind({});
Empty.args = {
  value: '',
  placeholder: 'Textarea Input Placeholder',
  valid: true,
  disabled: false,
  resizeable: 'both',
};

export const Filled = Template.bind({});
Filled.args = {
  value: 'Textarea Input Value',
  placeholder: 'Textarea Input Placeholder',
  valid: true,
  disabled: false,
  resizeable: 'both',
};

export const Invalid = Template.bind({});
Invalid.args = {
  value: '',
  placeholder: 'Textarea Input Placeholder',
  valid: false,
  disabled: false,
  resizeable: 'both',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: '',
  placeholder: 'Textarea Input Placeholder',
  valid: true,
  disabled: true,
  resizeable: 'both',
};