import { action } from '@storybook/addon-actions';

import SvwsUiRadioGroup from '../../components/Controls/RadioGroup.vue';
import SvwsUiRadioOption from '../../components/Controls/RadioOption.vue';

export default {
  title: 'SVWS UI/Controls/Radio Group',
  component: SvwsUiRadioGroup,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiRadioGroup, SvwsUiRadioOption },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onInput: action('input') },
  template: `
    <svws-ui-radio-group v-bind="args">
      <svws-ui-radio-option v-bind="args" @input="onInput" value="option1" name="radioInputExample" label="Option 1" />
      <svws-ui-radio-option v-bind="args" @input="onInput" value="option2" name="radioInputExample" label="Option 2" disabled />
      <svws-ui-radio-option v-bind="args" @input="onInput" value="option3" name="radioInputExample" label="Option 3" />
    </svws-ui-radio-group>
    `,
});

export const Default = Template.bind({});
Default.args = {};
