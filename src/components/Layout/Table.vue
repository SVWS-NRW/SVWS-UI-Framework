<template>
  <table class="svws-ui--table" style="width: calc(100% - 1px)">
    <thead class="svws-ui--table--header">
      <tr>
        <td class="svws-ui--table--cell" v-if="multiSelect">
          <svws-ui-checkbox
            :value="this.selectedCounter === this.items.length"
            @change="selectAll"
          />
        </td>
        <td
          class="svws-ui--table--cell"
          v-for="col in cols"
          :key="col.id"
          :width="col.width"
          @click="changeSort(col)"
        >
          <div class="svws-ui--table--header-col">
            <span class="svws-ui--table--header-col--text">{{
              col.title
            }}</span>
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
        <td class="svws-ui--table--cell" v-if="actions && actions.length > 0"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.data.id"
        :tabindex="this.items.indexOf(item) + 1"
        class="svws-ui--table--row"
        v-bind:class="{ 'svws-ui--table--row-selected': current === item }"
      >
        <td class="svws-ui--table--cell" v-if="multiSelect">
          <svws-ui-checkbox
            :value="item.selected"
            @change="toggleSelect(item)"
          />
        </td>
        <td
          class="svws-ui--table--cell"
          v-for="col in cols"
          :key="item.data[col.id]"
          @click="mousePressed(item)"
          :width="col.width"
        >
          {{ item.data[col.id] }}
        </td>
        <td
          class="svws-ui-border svws-ui-border-dark-20 svws-ui-bg-white"
          v-if="actions && actions.length > 0"
        >
          <Menu
            as="div"
            class="svws-ui-relative svws-ui-inline-block svws-ui-text-left"
          >
            <MenuButton class="svws-ui--table--action-button"
              ><svws-ui-icon variant="fill" icon="more-2" />
            </MenuButton>
            <MenuItems
              class="svws-ui-z-10 svws-ui-origin-top-right svws-ui-absolute svws-ui-right-0 svws-ui-mt-0 svws-ui-w-48 svws-ui-rounded-md svws-ui-px-2 svws-ui-shadow-lg svws-ui-bg-white svws-ui-ring-1 svws-ui-ring-black svws-ui-ring-opacity-5 svws-ui-focus:outline-none"
            >
              <div class="svws-ui-flex svws-ui-flex-col svws-ui-py-1">
                <MenuItem v-for="action in actions" :key="action">
                  <svws-ui-button
                    type="transparent"
                    @click="this.$emit('action', [action.action, item])"
                    >{{ action.label }}</svws-ui-button
                  >
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </td>
      </tr>
      <tr class="svws-ui-sticky svws-ui-bottom-0 svws-ui-left-0">
        <td class="svws-ui-py-2 svws-ui-px-4 svws-ui-bg-white" colspan="1000">
          fsdfjkskl
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

export default defineComponent({
  name: 'SvwsUiTable',
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
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
  },
  emits: [
    'update:sort',
    'update:asc',
    'update:selected',
    'action',
    'update:selectedCounter',
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
      selectedCounter: 0,
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
        this.selectedCounter >= 0 &&
        this.selectedCounter < this.items.length
      ) {
        this.items.forEach((item) => (item.selected = true));
        this.selectedCounter = this.items.length;
        this.$emit('update:selectedCounter', this.selectedCounter);
      } else if (this.selectedCounter <= this.items.length) {
        this.items.forEach((item) => (item.selected = false));
        this.selectedCounter = 0;
        this.$emit('update:selectedCounter', this.selectedCounter);
      }
    },
    mousePressed(item) {
      this.changeCurrent(item);
    },
    toggleSelect(item) {
      item.selected = !item.selected;
      if (item.selected) {
        this.selectedCounter++;
        this.$emit('update:selectedCounter', this.selectedCounter);
      } else {
        this.selectedCounter--;
        this.$emit('update:selectedCounter', this.selectedCounter);
      }
    },
    updateData() {
      this.items = this.rows.map((item) => ({ data: item, selected: false }));
    },
    changeCurrent(item) {
      if (!item) {
        return undefined;
      }
      this.current = item;
      this.$emit('update:selected', item.data);
      return item.data;
    },
  },
  created() {
    this.updateData();
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
  @apply svws-ui-space-x-2;
  @apply svws-ui-text-black svws-ui-text-button svws-ui-font-bold;
  @apply svws-ui-select-none;
}

.svws-ui--table--header {
}

.svws-ui--table--row {
  @apply svws-ui-text-black svws-ui-text-button;
}

.svws-ui--table--row:hover {
  @apply svws-ui-cursor-pointer;
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
  @apply svws-ui-border svws-ui-border-dark-20 svws-ui-bg-white svws-ui-px-3 svws-ui-py-1;
}

.svws-ui--table {
  @apply svws-ui-h-full;
  @apply svws-ui-overflow-y-auto;
}

.svws-ui--table--action-button {
  @apply svws-ui-h-6 svws-ui-w-6;
}

.svws-ui--table--action-button:focus {
  @apply svws-ui-outline-none svws-ui-ring-inset svws-ui-ring-primary svws-ui-ring-2;
}
</style>
