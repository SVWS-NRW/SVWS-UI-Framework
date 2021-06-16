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
        <div class="flex flex-row items-start space-x-4">
          <div class="flex-shrink-0">
            <img src="http://placehold.it/256x256" class="w-32 h-32 rounded-full md:h-20 md:w-20 lg:h-24 lg:w-24">
          </div>
          <div class="flex-grow grid gap-4 grid-cols-1 md:grid-cols-2">
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
