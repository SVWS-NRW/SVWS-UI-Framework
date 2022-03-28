import SvwsUiTableInput from '../../components/Layout/TableInput.vue';

export default {
  title: 'SVWS UI/Layout/TableInput',
  component: SvwsUiTableInput,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiTableInput },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: '<svws-ui-table-input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  tableId: 'leistungsdaten',
  multiSelect: false,
  cols: [
    {
      id: 'fach',
      title: 'Fach',
      sortable: true,
      type: 'dropdown',
      args: {
        options: [
          { id: 1, label: 'Deutsch' },
          { id: 2, label: 'Mathe' },
          { id: 3, label: 'Englisch' },
          { id: 4, label: 'Sport' },
        ],
      },
    },
    { id: 'zeugnis', title: 'Auf Zeugnis', sortable: true, type: 'checkbox' },
    {
      id: 'kursart',
      title: 'Kurs-Art',
      sortable: true,
      type: 'dropdown',
      args: {
        options: [
          { id: 1, label: 'PUT - Pflichtunterricht für Teile von Klassen' },
          { id: 2, label: 'Eine zweite Option' },
        ],
      },
    },
    {
      id: 'kursbez',
      title: 'Kurs-Bezeichnung',
      sortable: true,
      type: 'dropdown',
      args: {
        options: [
          { id: 1, label: 'Musik-AG' },
          { id: 2, label: 'Informatik-AG' },
        ],
      },
    },
    {
      id: 'lehrkraft',
      title: 'Lehrkraft',
      sortable: true,
      type: 'dropdown',
      args: {
        options: [
          { id: 1, label: 'Frank Pfotenhauer' },
          { id: 2, label: 'Sebastian Menzel' },
        ],
      },
    },
    { id: 'mahnung', title: 'Mahnung', sortable: true, type: 'checkbox' },
    {
      id: 'note',
      title: 'Note',
      sortable: true,
      type: 'dropdown',
      args: {
        options: [
          { id: 1, label: '1' },
          { id: 2, label: '2' },
          { id: 3, label: '3' },
          { id: 4, label: '4' },
          { id: 5, label: '5' },
          { id: 6, label: '6' },
          { id: 7, label: 'E1' },
          { id: 8, label: 'E2' },
        ],
      },
    },
  ],
  rows: [
    {
      id: 1,
      fach: 2,
      extern: 1,
      kursart: 1,
      kursbez: 2,
      lehrkraft: 1,
      note: 7,
      mahnung: true,
    },
    {
      id: 2,
      fach: 2,
      extern: 1,
      kursart: 1,
      kursbez: 2,
      lehrkraft: 1,
      note: 7,
      mahnung: true,
    },
    {
      id: 3,
      fach: 2,
      extern: 1,
      kursart: 1,
      kursbez: 2,
      lehrkraft: 1,
      note: 7,
      mahnung: true,
    },
  ],
};
