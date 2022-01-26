import SvwsUiTableInput from '../../components/Layout/TableInput.vue';

export default {
    title: 'SVWS UI/Layout/TableInput',
    component: SvwsUiTableInput,
    argTypes: {},
};

const Template = (args, { argTypes })=> ({
    components: { SvwsUiTableInput },
    setup() {
        return { args };
    },
    props: Object.keys(argTypes),
    template: '<svws-ui-table-input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args= {
    cols: [
        { id: 'fach', title: 'Fach', sortable: false, type: 'dropdown', args: {
            options: [
                { id: 1, label: 'Deutsch' },
                { id: 2, label: 'Mathe' },
                { id: 3, label: 'Englisch' },
                { id: 4, label: 'Sport' }
            ]
        } },
        { id: 'zeugnis', title: 'Auf Zeugnis', sortable: false, type: 'checkbox' },
        { id: 'extern', title: 'Unterricht in ext. Schule', sortable: false, type: 'dropdown', args: {
            options: [
                { id: 1, label: 'ABC Realschule Wuppertal' },
                { id: 2, label: 'Gymnasium XYZ Wuppertal' }
            ]
        } },
        { id: 'kursart', title: 'Kurs-Art', sortable: false, type: 'dropdown', args: {
            options: [
                { id: 1, label: 'PUT - Pflichtunterricht für Teile von Klassen' }
            ]
        } },
        { id: 'kursbez', title: 'Kurs-Bezeichnung', sortable: false, type: 'dropdown', args: {
            options: [
                { id: 1, label: 'Musik-AG' }
            ]
        } },
        { id: 'lehrkraft', title: 'Lehrkraft', sortable: false, type: 'dropdown', args: {
            options: [
                { id: 1, label: 'Frank Pfotenhauer' }
            ]
        } },
        { id: 'wze', title: 'WZE', sortable: false, type: 'number' },
        { id: 'zusatzkraft', title: 'Zusatzkraft', sortable: false, type: 'dropdown', args: {
            options: [
                { id: 1, label: 'Bernd Homut' }
            ]
        } },
        { id: 'wzezk', title: 'WZE ZK', sortable: false, type: 'number', args: {
            min: 1,
            max: 6
        } },
        { id: 'epochen', title: 'Epochen Unterricht', sortable: false, type: 'checkbox' },
        { id: 'm', title: 'M', sortable: false, type: 'checkbox' },
        { id: 'note', title: 'Note', sortable: false, type: 'dropdown', args: {
            options: [
                { id: 1, label: '1' },
                { id: 2, label: '2' },
                { id: 3, label: '3' },
                { id: 4, label: '4' },
                { id: 5, label: '5' },
                { id: 6, label: '6' },
                { id: 7, label: 'E1' },
                { id: 8, label: 'E2' }
            ]
        } },
        { id: 'teilleistung', title: 'Teilleistung', sortable: false, type: 'button' },
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
           lehrkraft: 1,
           wze: 6,
           zusatzkraft: 1,
           wzezk: 2,
           epochen: true,
           note: 4
       },
       {
        id: 2,
        fach: 2,
        zeugnis: true,
        extern: 2,
        m: true,
        kursart: 1,
        kursbez: 1,
        lehrkraft: 1,
        wze: 1,
        zusatzkraft: 1,
        wzezk: 4,
        epochen: false,
        note: 4
    }
    ],
}
