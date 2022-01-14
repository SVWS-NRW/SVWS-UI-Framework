import { action } from '@storybook/addon-actions';

import SvwsUiMultiSelect from '../../components/Controls/MultiSelect.vue';

export default {
  title: 'SVWS UI/Controls/Multiselect',
  component: SvwsUiMultiSelect,
};
const items = [{id:1,text:"item1"},{id:2,text:"item2"},{id:3,text:"item3"}]
const Template = (args, { argTypes }) => ({
  components: { SvwsUiMultiSelect },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  methods: { onInput: action('input') },
  template: '<svws-ui-multi-select v-bind="args" @input="onInput" />',
});

export const Simple = Template.bind({});
Simple.args = {
  tags: false,
  autocomplete: false,
  disabled: false,
  statistics: false,
  items,
  itemText: undefined,
  itemSort: undefined,
  itemFilter: undefined,
  title: 'Simple'
};
export const SimpleSort = Template.bind({});
SimpleSort.args = {
  tags: false,
  autocomplete: false,
  disabled: false,
  statistics: false,
  items,
  itemText: undefined,
  itemSort: (a:any,b:any) => a.text+b.text,
  itemFilter: undefined,
  title: 'Simple'
};
export const SimpleText = Template.bind({});
SimpleText.args = {
  tags: false,
  autocomplete: false,
  disabled: false,
  statistics: false,
  items,
  itemText: (item) => item.id,
  itemSort: (a,b) => a.id-b.id,
  itemFilter: undefined,
  title: 'Simple'
};
export const SimpleFilter = Template.bind({});
SimpleText.args = {
  tags: false,
  autocomplete: false,
  disabled: false,
  statistics: false,
  items,
  itemText: (item) => item.id,
  itemSort: undefined,
  itemFilter: (items: any,search: string) => items.filter(i=>i.id===search),
  title: 'Simple'
};
export const SimpleAutocomplete = Template.bind({});
SimpleAutocomplete.args = {
  tags: false,
  autocomplete: true,
  disabled: false,
  statistics: false,
  items,
  itemText: undefined,
  itemSort: undefined,
  itemFilter: undefined,
  title: 'SimpleAutocomplete'
};

export const Tags = Template.bind({});
Tags.args = {
  tags: true,
  autocomplete: false,
  disabled: false,
  statistics: false,
  items,
  itemText: undefined,
  itemSort: undefined,
  itemFilter: undefined,
  title: 'Tags'
};

export const TagsAutocomplete = Template.bind({});
TagsAutocomplete.args = {
  tags: true,
  autocomplete: true,
  disabled: false,
  statistics: false,
  items,
  itemText: undefined,
  itemSort: undefined,
  itemFilter: undefined,
  title: 'TagsAutocomplete'
};