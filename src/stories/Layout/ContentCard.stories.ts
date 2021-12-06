import SvwsUiContentCard from '../../components/Layout/ContentCard.vue';

export default {
  title: 'SVWS UI/Layout/Content Card',
  component: SvwsUiContentCard,
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiContentCard },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: `
      <svws-ui-content-card v-bind="args">
        <template #actions>
            test
        </template>
        <div class="svws-ui-flex svws-ui-flex-row svws-ui-items-start svws-ui-space-x-4">
          <div class="svws-ui-flex-shrink-0">
            <img src="http://placehold.it/256x256" class="svws-ui-w-32 svws-ui-h-32 svws-ui-rounded-full md:svws-ui-h-20 md:svws-ui-w-20 lg:svws-ui-h-24 lg:svws-ui-w-24">
          </div>
          <div class="svws-ui-flex-grow svws-ui-grid svws-ui-gap-4 svws-ui-grid-cols-1 md:svws-ui-grid-cols-2">
            <svws-ui-text-input type="text" placeholder="Vorname" />
            <svws-ui-text-input type="text" placeholder="Alle Vornamen" />
            <svws-ui-text-input type="text" placeholder="Nachname" />
            <svws-ui-text-input type="text" placeholder="Zusatz" />
            <svws-ui-text-input type="text" placeholder="Adresse" />
            <svws-ui-text-input type="text" placeholder="Wohnort" />
          </div>
        </div>
      </svws-ui-content-card>
    `,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Basisdaten',
};
