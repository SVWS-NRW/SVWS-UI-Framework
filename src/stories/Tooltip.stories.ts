import SvwsUiTooltip from '../components/Tooltip.vue';

export default {
  title: 'SVWS UI/Tooltip',
  component: SvwsUiTooltip,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiTooltip },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: `
    <svws-ui-tooltip>
      Das ist ein Tooltip
    </svws-ui-tooltip>
  `,
});

export const Default = Template.bind({});
Default.args = {};