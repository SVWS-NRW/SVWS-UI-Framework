export default {
  title: 'SVWS UI/Colors',
};

const Template = (args) => ({
  components: {},
  setup() {
    return { args };
  },
  template:
    `<div class="svws-ui-bg-white svws-ui-grid svws-ui-cols-1 svws-ui-gap-8" v-bind:class="{ 'theme-dark': args.darkTheme }">
      <div class="svws-ui-px-12 svws-ui-w-full svws-ui-py-24">
        <div class="svws-ui-flex svws-ui-flex-row svws-ui-items-cenrter svws-ui-flex-wrap svws-ui-gap-4 svws-ui-mt-4">
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-white svws-ui-text-black">white</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-black svws-ui-text-white">black</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-gray svws-ui-text-white">gray</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-primary svws-ui-text-white">primary</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-light svws-ui-text-black">light</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-dark-20 svws-ui-text-black">dark-20</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-dark-80 svws-ui-text-white">dark-80</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-dark svws-ui-text-white">dark</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-error svws-ui-text-white">error</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-success svws-ui-text-black">success</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-highlight svws-ui-text-black">highlight</div>
        </div>
      </div>
      <div class="svws-ui-px-12 svws-ui-w-full svws-ui-py-24">
        <div class="svws-ui-flex svws-ui-flex-row svws-ui-items-cenrter svws-ui-flex-wrap svws-ui-gap-4 svws-ui-mt-4">
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-brown svws-ui-text-white">brown</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-brown-light svws-ui-text-black">brown-light</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-brown-dark svws-ui-text-white">brown-dark</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-orange svws-ui-text-white">orange</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-orange-light svws-ui-text-black">orange-light</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-orange-dark svws-ui-text-white">orange-dark</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-purple svws-ui-text-white">purple</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-purple-light svws-ui-text-black">purple-light</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-purple-dark svws-ui-text-white">purple-dark</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-blue svws-ui-text-white">blue</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-blue-light svws-ui-text-black">blue-light</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-blue-dark svws-ui-text-white">blue-dark</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-green svws-ui-text-black">green</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-green-light svws-ui-text-black">green-light</div>
          <div class="svws-ui-h-24 svws-ui-w-24 svws-ui-rounded-2xl svws-ui-shadow-md svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-border svws-ui-border-dark svws-ui-bg-green-dark svws-ui-text-white">green-dark</div>
        </div>
      </div>
    </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
  darkTheme: false,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  darkTheme: true,
};