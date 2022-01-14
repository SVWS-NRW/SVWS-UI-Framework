<template>
  <div class="wrapper">
    <div
      v-if="tags"
      class="svws-ui--text-input--control tags"
      :class="{
        'svws-ui--multiselect--input--open': list,
      }"
      @click.self="onClickTags"
    >
      <div class="tag-list">
        <slot v-if="!selected_item_list.length" name="no-content"
          ><span class="svws-ui-py-1">Keine Auswahl</span></slot
        >
        <div
          v-for="(item, index) in selected_item_list"
          v-else
          :key="index"
          class="tag"
        >
          <svws-ui-badge
            size="tiny"
            class="svws-ui-inline-flex svws-ui-items-center"
          >
            <span>{{ itemText(item) }}</span>
            <span
              class="tag-remove svws-ui-mt-1 svws-ui-ml-1"
              @click="tag_remove(index)"
              ><svws-ui-icon icon="close"
            /></span>
          </svws-ui-badge>
        </div>
      </div>
      <svws-ui-icon
        :icon="this.focused ? 'arrow-up-s' : 'arrow-down-s'"
        class="svws-ui--dropdown--icon"
      />
    </div>
    <div v-show="input" class="input">
      <label
        class="svws-ui--text-input"
        :class="{
          'svws-ui--text-input-filled': !!modelValue,
          'svws-ui--text-input-focus': focused,
          'svws-ui--text-input-disabled': disabled,
        }"
      >
        <svws-ui-text-input
          :class="{
            'svws-ui--multiselect--input--open': input,
          }"
          ref="input"
          :model-value="search"
          :readonly="!autocomplete"
          :placeholder="title"
          :statistics="statistics"
          @update:model-value="onUpdate"
          @focus="onFocus"
          @blur="onBlur"
          @keydown.down.prevent="onArrowDown"
          @keydown.up.prevent="onArrowUp"
          @keydown.enter.tab.prevent="select"
          @keydown.esc.prevent="blur"
          :disabled="disabled"
        />
        <span v-if="placeholder" class="svws-ui--text-input--placeholder">
          {{ placeholder }}
        </span>
        <svws-ui-icon
          v-if="!tags"
          :icon="this.focused ? 'arrow-up-s' : 'arrow-down-s'"
          class="svws-ui--dropdown--icon"
        />
      </label>
    </div>
    <ul v-if="list" class="svws-ui--multiselect--items-wrapper">
      <li
        v-for="(item, index) in filtered_list"
        :key="index"
        class="svws-ui--multiselect--item"
        :class="{
          active: selected_item_index === index + 1,
          selected: selected_item_list.includes(item),
        }"
        @mousedown.prevent
        @click="select_item(item)"
        @mouseenter="selected_item_index = index + 1"
      >
        {{ itemText(item) }}
      </li>
    </ul>
  </div>
  <br />
</template>

<script lang="ts">
import SvwsUiTextInput from './TextInput.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiMultiSelect',
  components: { SvwsUiTextInput },
  props: {
    placeholder: {type: String},
    required: {type: Boolean, default: false},
    // Bei mehrfachauswahl werden Tags angezeigt über dem Suchfeld
    tags: { type: Boolean, default: false },
    // Wenn eine Eingabe möglich sein soll
    autocomplete: { type: Boolean, default: false },
    // Das Select ist nicht wählbar
    disabled: { type: Boolean, default: false },
    // Das Select ist notwendig für die Statistik
    statistics: { type: Boolean, default: false },
    // Array mit den übergebenen Auswahlmöglichkeiten
    items: {
      type: Array,
      required: true,
      default: () => {
        return [];
      },
    },
    // der anzuzeigende Text im Auswahlmenü, item.text ist Standard
    itemText: { type: Function, default: (item: any) => item?.text },
    // der Sortieralgorithmus für die Auswahl
    itemSort: { type: Function, default: undefined },
    // der Titel, der als Label verwendet wird im Textfeld
    title: { default: '', type: String },
    // das ausgewählte Element, wird Parent übergeben
    modelValue: {
      type: [String, Array, Object, Number],
      default: () => {
        return { text: '' };
      },
    },
    // der Filter für die Auswahl
    itemFilter: { type: Function, default: undefined },
  },
  emits: ['focus', 'blur', 'update:modelValue'],
  data() {
    return {
      selected_item:
        this.modelValue?.constructor === Array
          ? this.modelValue[0]
          : this.modelValue,
      selected_item_list:
        this.modelValue?.constructor === Array
          ? this.modelValue
          : [this.modelValue],
      selected_item_index: 0,
      focused: false,
      input: !this.tags,
      search_text: '',
    };
  },
  computed: {
    search: {
      get(): string {
        if (!this.modelValue) return "";
        return this.itemText(this.modelValue);
      },
      set(v: string) {
        this.search_text = v;
      },
    },
    list(): boolean {
      if (this.autocomplete)
        return (
          this.focused &&
          !!this.filtered_list.length &&
          this.search_text.length > 1
        );
      else return this.focused;
    },
    sorted_list(): Array<any> {
      if (!this.items.length) return [];
      if (this.itemSort) return this.items.sort(this.itemSort);
      else
        return [...this.items].sort((a, b) =>
          this.itemText(a).localeCompare(this.itemText(b))
        );
    },
    filtered_list(): Array<any> {
      if (!this.items) return [];
      if (this.autocomplete) {
        if (this.itemFilter)
          return this.itemFilter(this.items, this.search_text);
        return this.sorted_list.filter((i: any) =>
          this.itemText(i).startsWith(this.search_text)
        );
      } else return this.sorted_list;
    },
  },
  methods: {
    onUpdate(event: string) {
      this.search = event;
    },
    select() {
      if (!this.list) return;
      this.select_item(this.filtered_list[this.selected_item_index - 1]);
    },
    select_item(item: any) {
      this.selected_item = item;
      if (this.tags) {
        if (this.selected_item_list.includes(item)) {
          this.selected_item_list.splice(
            this.selected_item_list.indexOf(item),
            1
          );
        } else this.selected_item_list.push(item);
      } else this.selected_item_list = [item];
      this.$refs.input.blur();
      this.search = this.itemText(item);
      this.$emit(
        'update:modelValue',
        this.tags ? this.selected_item_list : this.selected_item
      );
    },
    tag_remove(index: number) {
      this.selected_item_list.splice(index, 1);
    },
    onFocus(event: Event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    onClickTags() {
      if (this.autocomplete) {
        if (this.input) {
          this.input = false;
          this.$refs.input.blur();
          this.focused = false;
        } else {
          this.input = true;
          setTimeout(() => this.$refs.input.focus(), 100);
        }
      } else {
        this.focused = !this.focused;
      }
    },
    blur() {
      this.$refs.input.blur();
      this.focused = false;
      this.search = '';
    },
    onBlur() {
      if (!this.tags) this.focused = false;
      this.search = '';
    },
    onArrowDown() {
      const list = this.filtered_list.length;
      if (this.selected_item_index < list) this.selected_item_index++;
      else if (this.selected_item_index === list) this.selected_item_index = 1;
    },
    onArrowUp() {
      const list = this.filtered_list.length;
      if (this.selected_item_index === 0 || this.selected_item_index === 1)
        this.selected_item_index = list;
      else if (this.selected_item_index > 1) this.selected_item_index--;
    },
  },
});
</script>

<style>
.wrapper {
  position: relative;
}

.tags {
  @apply svws-ui-flex svws-ui-items-center svws-ui-justify-between;
  @apply svws-ui-relative svws-ui-z-10;
}

.tag-list {
  @apply svws-ui-flex svws-ui-items-center svws-ui-gap-2;
}

.svws-ui--multiselect--input--open {
  @apply svws-ui-rounded-b-none svws-ui-border-gray;
}
/*
.items {
  position: absolute;
  border: 1px solid #d4d4d4;
  z-index: 99;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 80vh;
  overflow: auto;
}
.items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
}
.items div:hover {
  background-color: #e9e9e9;
}
.selected-item-list {
  background-color: green !important;
}
.active {
  background-color: DodgerBlue !important;
  color: #ffffff;
}
*/

.input {
    @apply svws-ui-relative svws-ui-z-10;
}

.svws-ui--multiselect--items-wrapper {
  @apply svws-ui-absolute svws-ui-w-full svws-ui-z-20;
  @apply svws-ui-divide-y svws-ui-divide-light;
  @apply svws-ui-border svws-ui-border-t-0 svws-ui-border-gray svws-ui-rounded;
  @apply svws-ui-pt-2 svws-ui--mt-2;
  @apply svws-ui-overflow-hidden;
  @apply svws-ui-shadow;
}

.svws-ui--multiselect--item {
  @apply svws-ui-bg-white svws-ui-text-dark;
  @apply svws-ui-text-body;
  @apply svws-ui-py-2 svws-ui-px-4;
}

.svws-ui--multiselect--item:hover {
  @apply svws-ui-bg-light;
  @apply svws-ui-cursor-pointer;
}

.svws-ui--multiselect--item .active {
  @apply svws-ui-bg-primary svws-ui-text-white;
}

.svws-ui--multiselect--item.selected {
  @apply svws-ui-bg-primary svws-ui-text-white;
}

.svws-ui--multiselect--input--open {
  @apply svws-ui-rounded-b-none;
}
</style>
