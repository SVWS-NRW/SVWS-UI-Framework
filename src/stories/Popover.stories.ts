import SvwsUiPopover from '../components/Popover.vue';
import SvwsUiTooltip from '../components/Tooltip.vue';

export default {
  title: 'SVWS UI/Popover',
  component: SvwsUiPopover,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: [
          'auto',
          'auto-start',
          'auto-end',
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'right',
          'right-start',
          'right-end',
          'left',
          'left-start',
          'left-end',
        ],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiPopover, SvwsUiTooltip },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: `
  <div class="svws-ui-h-screen svws-ui-w-screen svws-ui-flex svws-ui-items-center svws-ui-justify-center">
    <svws-ui-popover v-bind="args">
      <template #trigger>
        <span class="svws-ui-underline">Hier versteckt sich ein Tooltip</span>
      </template>
      <template #content>
        <svws-ui-tooltip>
          Das ist ein Tooltip
        </svws-ui-tooltip>
      </template>
    </svws-ui-popover>
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  placement: 'auto',
};