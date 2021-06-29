import SvwsUiTable from '../../components/Layout/Table.vue';

export default {
  title: 'SVWS UI/Layout/Table',
  component: SvwsUiTable,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiTable },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: '<svws-ui-table v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  multiSelect: false,
  cols: [
    { id: 'kuerzel', title: 'Kuerzel', width: '10%' },
    { id: 'nachname', title: 'Nachname', width: '45%' },
    { id: 'vorname', title: 'Vorname', width: '45%' },
  ],
  rows: [
    { id: 1, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 2, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 3, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 4, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 5, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 6, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
  ],
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  multiSelect: true,
  cols: [
    { id: 'kuerzel', title: 'Kuerzel', width: '10%' },
    { id: 'nachname', title: 'Nachname', width: '45%' },
    { id: 'vorname', title: 'Vorname', width: '45%' },
  ],
  rows: [
    { id: 1, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 2, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 3, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 4, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 5, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 6, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
  ],
};
