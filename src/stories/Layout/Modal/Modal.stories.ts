import { action } from '@storybook/addon-actions';

import { ref } from 'vue';
import SvwsUiModal from '../../../components/Layout/Modal/Modal.vue';
import SvwsUiRadioGroup from '../../../components/Controls/RadioGroup.vue';
import SvwsUiRadioOption from '../../../components/Controls/RadioOption.vue';
import SvwsUiButton from '../../../components/Controls/Button.vue';

export default {
  title: 'SVWS UI/Layout/Modal',
  component: SvwsUiModal,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    SvwsUiModal,
    SvwsUiRadioGroup,
    SvwsUiRadioOption,
    SvwsUiButton,
  },
  setup() {
    const modal = ref(null);

    return { args, modal };
  },
  props: Object.keys(argTypes),
  methods: { onClick: action('click') },
  template: `
    <svws-ui-button v-bind="args" @click="modal.openModal()">Open Modal</svws-ui-button>

    <svws-ui-modal ref="modal" v-bind="args">
      <template v-slot:modalTitle>Schüler hinzufügen</template>
      <template v-slot:modalDescription>Welches Schuljahr soll bei den neu aufzunehmenden Schülern gesetzt werden?</template>
      <template v-slot:modalContent>
        <svws-ui-radio-group>
          <svws-ui-radio-option v-bind="args" value="option3" name="radioInputExample" label="Vergangenes Schuljahr 2019/2020" disabled />
          <svws-ui-radio-option v-bind="args" value="option1" name="radioInputExample" label="Aktuelles Schuljahr 2020/21" />
          <svws-ui-radio-option v-bind="args" value="option2" name="radioInputExample" label="Kommendes Schuljahr 2021/22" checked />
        </svws-ui-radio-group>
      </template>

      <template v-slot:modalActions>
        <svws-ui-button v-bind="args" @click="modal.closeModal" type="secondary">Abbrechen</svws-ui-button>
        <svws-ui-button v-bind="args" @click="onClick">Weiter</svws-ui-button>
      </template>
    </svws-ui-modal>
  `,
});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};