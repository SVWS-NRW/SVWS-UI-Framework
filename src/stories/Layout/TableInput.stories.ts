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
      id: 'extern',
      title: 'Unterricht in ext. Schule',
      sortable: true,
      type: 'dropdown',
      args: {
        options: [
          { id: 1, label: 'ABC Realschule Wuppertal' },
          { id: 2, label: 'Gymnasium XYZ Wuppertal' },
        ],
      },
    },
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
    {
      id: 'epochen',
      title: 'Epochen Unterricht',
      sortable: true,
      type: 'checkbox',
    },
    { id: 'wze', title: 'WZE', sortable: true, type: 'number' },
    { id: 'm', title: 'M', sortable: true, type: 'checkbox' },
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
    {
      id: 'zusatzkraft',
      title: 'Zusatzkraft',
      sortable: true,
      type: 'dropdown',
      args: {
        options: [
          { id: 1, label: 'Bernd Homut' },
          { id: 2, label: 'Florian Kops' },
        ],
      },
    },
    {
      id: 'wzezk',
      title: 'WZE ZK',
      sortable: true,
      type: 'number',
      args: {
        min: 1,
        max: 6,
      },
    },
    {
      id: 'teilleistung',
      title: 'Teilleistung',
      sortable: true,
      type: 'button',
      args: {
          label: 'Bearbeiten'
      }
    },
  ],
  rows: [
    {
      id: 1,
      fach: 4,
      zeugnis: false,
      extern: 2,
      m: false,
      kursart: 1,
      kursbez: 1,
      lehrkraft: 2,
      wze: 6,
      zusatzkraft: 1,
      wzezk: 2,
      epochen: true,
      note: 4,
    },
    {
      id: 2,
      fach: 2,
      zeugnis: true,
      extern: 1,
      m: true,
      kursart: 1,
      kursbez: 2,
      lehrkraft: 1,
      wze: 1,
      zusatzkraft: 2,
      wzezk: 4,
      epochen: false,
      note: 7,
    },
    {
        id: 3,
        fach: 4,
        zeugnis: false,
        extern: 2,
        m: false,
        kursart: 1,
        kursbez: 1,
        lehrkraft: 2,
        wze: 6,
        zusatzkraft: 1,
        wzezk: 2,
        epochen: true,
        note: 4,
      },
  ],
};
