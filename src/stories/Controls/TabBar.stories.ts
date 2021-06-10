import SvwsUiTabBar from '../../components/Controls/TabBar.vue';
import SvwsUiTab from '../../components/Controls/Tab.vue';

export default {
  title: 'SVWS UI/Controls/Tab Bar',
  component: SvwsUiTabBar,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiTabBar, SvwsUiTab },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: `
    <svws-ui-tab-bar>
      <svws-ui-tab title="Individualdaten">Das ist der Tab Individualdaten</svws-ui-tab>
      <svws-ui-tab title="Erziehungsberechtigte" disabled>Das ist der Tab Erziehungsberechtigte</svws-ui-tab>
      <svws-ui-tab title="Schulbesuch">Das ist der Tab Schulbesuch</svws-ui-tab>
      <svws-ui-tab title="Weitere Adressen">Das ist der Tab Adressen</svws-ui-tab>
      <svws-ui-tab title="Laufbahninfo">Das ist der Tab Laufbahninfo</svws-ui-tab>
      <svws-ui-tab title="Fördermaßnahmen">Das ist der Tab Fördermaßnahmen</svws-ui-tab>
      <svws-ui-tab title="Aktuelles Halbjahr">Das ist der Tab Aktuelles Halbjahr</svws-ui-tab>
      <svws-ui-tab title="Übersicht S1">Das ist der Tab Übersicht S1</svws-ui-tab>
      <svws-ui-tab title="Gesamtübersicht">Das ist der Tab Gesamtübersicht</svws-ui-tab>
    </svws-ui-Tab-bar>
    `,
});

export const Default = Template.bind({});
Default.args = {};
