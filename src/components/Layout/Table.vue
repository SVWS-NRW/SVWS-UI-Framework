<template>
  <table class="svws-ui--table">
    <thead class="svws-ui--table--header">
      <tr>
        <td
          class="svws-ui--table--cell svws-ui--table--cell-padded svws-ui-w-1"
          v-if="multiSelect"
        ></td>
        <td
          class="svws-ui--table--cell svws-ui--table--cell-padded"
          v-for="col in cols"
          :key="col.id"
          :width="col.width"
          @click="changeSort(col)"
        >
          <div class="svws-ui--table--header-col">
            <span class="svws-ui--table--header-col--text">
              {{ col.title }}
            </span>
            <span v-if="col.sortable">
              <svws-ui-icon
                v-show="col.id !== sorting.column"
                icon="arrow-up-down"
              />
              <svws-ui-icon
                v-show="sorting.asc && col.id === sorting.column"
                icon="sort-asc "
              />
              <svws-ui-icon
                v-show="!sorting.asc && col.id === sorting.column"
                icon="sort-desc "
              />
            </span>
          </div>
        </td>
        <td
          class="svws-ui--table--cell svws-ui--table--cell-padded"
          v-if="actions && actions.length > 0"
        ></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.data.id"
        :tabindex="this.items.indexOf(item) + 1"
        :id="'row_' + (this.items.indexOf(item) + 1)"
        @keydown.space="onKeyDownSpace"
        @keydown.down="onKeyDown"
        @keydown.up="onKeyUp"
        class="svws-ui--table--row"
        v-bind:class="{ 'svws-ui--table--row-selected': current === item }"
      >
        <td
          class="svws-ui--table--cell svws-ui--table--cell-padded"
          v-if="multiSelect"
        >
          <svws-ui-checkbox
            :value="item.selected"
            @change="toggleSelect(item)"
          />
        </td>
        <td
          class="svws-ui--table--cell svws-ui--table--cell-padded"
          v-for="col in cols"
          :key="item.data[col.id]"
          @click="mousePressed(item)"
          :width="col.width"
        >
          {{ item.data[col.id] }}
        </td>
        <td class="svws-ui--table--cell" v-if="actions && actions.length > 0">
          <svws-ui-popover
            :hover="false"
            placement="left-end"
            :disableClickAway="false"
          >
            <template #trigger>
              <button class="svws-ui--table--action-button">
                <svws-ui-icon variant="fill" icon="more-2" />
              </button>
            </template>
            <template #content>
              <div class="svws-ui--table--action-items">
                <div v-for="action in actions" :key="action">
                  <svws-ui-button
                    class="svws-ui--table--action-item"
                    type="transparent"
                    @click="this.$emit('action', [action.action, item])"
                    >{{ action.label }}</svws-ui-button
                  >
                </div>
              </div>
            </template>
          </svws-ui-popover>
          <!--
          <Menu
            as="div"
            class="svws-ui-relative svws-ui-inline-block svws-ui-text-left"
          >
            <MenuButton class="svws-ui--table--action-button"
              ><svws-ui-icon variant="fill" icon="more-2" />
            </MenuButton>
            <MenuItems class="svws-ui--table--action-items">
              <MenuItem v-for="action in actions" :key="action">
                <svws-ui-button
                  type="transparent"
                  @click="this.$emit('action', [action.action, item])"
                  >{{ action.label }}</svws-ui-button
                >
              </MenuItem>
            </MenuItems>
          </Menu>
          -->
        </td>
      </tr>
      <tr class="svws-ui--table--footer-wrapper" v-if="multiSelect || footer">
        <td class="svws-ui--table--footer-row" colspan="1000">
          <div class="svws-ui--table--footer">
            <svws-ui-checkbox
              :value="this.selectedItems === this.items"
              @change="selectAll()"
              v-if="multiSelect"
            />
            <slot v-if="footer" name="footer" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

export default defineComponent({
  name: 'SvwsUiTable',
  /*
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  */
  props: {
    multiSelect: {
      type: Boolean,
      default: false,
    },
    cols: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
    },
    actions: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Object,
    },
    footer: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'update:sort',
    'update:asc',
    'update:selected',
    'action',
    'update:selectedItems',
  ],
  data() {
    return {
      sort: '',
      asc: true,
      sorting: {
        column: '',
        asc: false,
      },
      current: {
        data: {},
        selected: false,
      },
      items: {
        data: {},
        selected: false,
      },
      selectedItems: [],
    };
  },
  methods: {
    changeSort(column) {
      if (column.sortable) {
        if (this.sorting.column === column.id) {
          this.sorting.asc = !this.sorting.asc;
          this.$emit('update:asc', this.sorting.asc);
        } else {
          this.sorting.column = column.id;
          this.sorting.asc = true;
          this.$emit('update:sort', this.sorting.column);
          this.$emit('update:asc', this.sorting.asc);
        }
      }
    },
    doSort() {
      if (this.sorting.column) {
        if (this.sorting.asc) {
          this.items.sort((a, b) =>
            b.data[this.sorting.column].localeCompare(
              a.data[this.sorting.column],
              'de-DE'
            )
          );
        } else {
          this.items.sort((a, b) =>
            a.data[this.sorting.column].localeCompare(
              b.data[this.sorting.column],
              'de-DE'
            )
          );
        }
      }
    },
    selectAll() {
      if (
        this.selectedItems.length >= 0 &&
        this.selectedItems.length < this.items.length
      ) {
        this.items.forEach((item) => (item.selected = true));
        this.selectedItems = this.items;
      } else if (this.selectedItems.length === this.items.length) {
        this.items.forEach((item) => (item.selected = false));
        this.selectedItems = [];
      }
      this.$emit('update:selectedItems', this.selectedItems);
    },
    mousePressed(item) {
      this.changeCurrent(item);
    },
    toggleSelect(item) {
      item.selected = !item.selected;
      if (item.selected) {
        this.selectedItems.push(item);
      } else {
        this.selectedItems = this.removeFromArray(this.selectedItems, item);
      }
      this.$emit('update:selectedItems', this.selectedItems);
    },
    updateData() {
      this.items = this.rows.map((item) => ({ data: item, selected: false }));
    },
    removeFromArray(arr, val) {
      return arr.filter(function (ele) {
        return ele != val;
      });
    },
    changeCurrent(item) {
      if (!item) {
        return undefined;
      }
      this.current = item;
      this.$emit('update:selected', item.data);
      return item.data;
    },
    /* KEYBOARD NAVIGATION */
    onKeyDown() {
      event?.preventDefault();
      let element = null;
      const index = this.items.indexOf(this.current);
      if (index + 1 === this.items.length) {
        this.changeCurrent(this.items[0]);
        element = document.getElementById('row_1');
      } else {
        this.changeCurrent(this.items[index + 1]);
        element = document.getElementById('row_' + (index + 1));
      }
      this.focusAndScroll(element);
    },
    onKeyDownSpace() {
      event?.preventDefault();
      this.toggleSelect(this.current);
    },
    onKeyUp() {
      event?.preventDefault();
      let element = null;
      const index = this.items.indexOf(this.current);
      if (index === 0) {
        this.changeCurrent(this.items[this.items.length - 1]);
        element = document.getElementById('row_' + this.items.length);
      } else {
        this.changeCurrent(this.items[index - 1]);
        element = document.getElementById('row_' + index);
      }
      this.focusAndScroll(element);
    },
    focusAndScroll(element) {
      element.focus();
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    },
  },
  created() {
    this.updateData();
  },
  mounted() {
    document.getElementById('row_1')?.focus();
  },
  watch: {
    current() {
      //console.log(this.current);
    },
    sort() {
      this.sorting.column = this.sort;
    },
    asc() {
      this.sorting.asc = this.asc;
    },
    items: {
      deep: true,
      handler() {
        if (this.current.data.id === undefined && this.items[0] !== undefined) {
          this.changeCurrent(this.items[0]);
        }
      },
    },
    rows: {
      deep: true,
      handler() {
        this.updateData();
      },
    },
    sorting: {
      deep: true,
      handler() {
        this.doSort();
      },
    },
  },
});
</script>

<style>
.svws-ui--table--header-col {
  @apply svws-ui-inline-flex svws-ui-flex-row svws-ui-items-center;
  @apply svws-ui-select-none;
  @apply svws-ui-space-x-2;
  @apply svws-ui-text-black svws-ui-text-button svws-ui-font-bold;
}

.svws-ui--table--row {
  @apply svws-ui-text-black svws-ui-text-button;
}

.svws-ui--table--row:hover {
  @apply svws-ui-cursor-pointer;
}

.svws-ui--table--row:focus {
  @apply svws-ui-outline-none;
}

.svws-ui--table--row-selected {
  @apply svws-ui-text-primary svws-ui-font-bold;
}

.svws-ui--table--row-selected .svws-ui--checkbox {
  @apply svws-ui-font-normal;
}

.svws-ui--table--row-selected .svws-ui--checkbox .svws-ui--checkbox--indicator {
  @apply svws-ui-border-primary;
}

.svws-ui--table--cell {
  @apply svws-ui-bg-white;
  @apply svws-ui-border svws-ui-border-dark-20;
}

.svws-ui--table--cell-padded {
  @apply svws-ui-px-3 svws-ui-py-1;
}

.svws-ui--table {
  @apply svws-ui-w-full;
}

.svws-ui--table--action-button {
  @apply svws-ui-h-6 svws-ui-w-6;
}

.svws-ui--table--action-items {
  @apply svws-ui-bg-white;
  @apply svws-ui-flex svws-ui-flex-col;
  @apply svws-ui-px-2 svws-ui-py-1;
  @apply svws-ui-ring-1;
  @apply svws-ui-ring-black svws-ui-ring-opacity-5;
  @apply svws-ui-rounded-md;
  @apply svws-ui-shadow-lg;
  @apply svws-ui-w-48;
}

.svws-ui--table--action-item {
  @apply svws-ui-block;
  @apply svws-ui-w-full;
}

.svws-ui--table--action-items:focus {
  @apply svws-ui-outline-none;
}

.svws-ui--table--action-button:focus {
  @apply svws-ui-outline-none svws-ui-ring-inset svws-ui-ring-primary svws-ui-ring-2;
}

.svws-ui--table--footer {
  @apply svws-ui-flex svws-ui-justify-between;
  @apply svws-ui-w-full;
}

.svws-ui--table--footer-wrapper {
  @apply svws-ui-sticky svws-ui-bottom-0 svws-ui-left-0;
}

.svws-ui--table--footer-row {
  @apply svws-ui-bg-white;
  @apply svws-ui-py-2 svws-ui-px-3;
}
</style>
