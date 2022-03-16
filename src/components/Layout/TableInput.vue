<template>
  <table class="svws-ui--table" :id="tableId">
    <thead class="svws-ui--table--header">
      <tr>
        <td v-if="multiSelect"></td>
        <td
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
              <svws-ui-icon v-show="col.id !== sorting.column"
                ><i-ri-arrow-up-down-line
              /></svws-ui-icon>
              <svws-ui-icon v-show="sorting.asc && col.id === sorting.column"
                ><i-ri-sort-asc
              /></svws-ui-icon>
              <svws-ui-icon v-show="!sorting.asc && col.id === sorting.column"
                ><i-ri-sort-desc
              /></svws-ui-icon>
            </span>
          </div>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.data.id"
        :tabindex="this.items.indexOf(item) + 1"
        :id="tableId + '_row_' + (this.items.indexOf(item) + 1)"
        @keydown.space="onKeyDownSpace"
        @keydown.down="onKeyDown"
        @keydown.up="onKeyUp"
        v-bind:class="{ 'svws-ui--table--row-selected': current === item }"
      >
        <td v-if="multiSelect">
          <svws-ui-checkbox
            :modelValue="item.selected"
            @change="toggleSelect(item)"
          />
        </td>
        <td
          v-for="col in cols"
          :key="item.data[col.id]"
          :width="col.width"
          @click="mousePressed(item)"
        >
          <svws-ui-checkbox
            v-if="col.type === 'checkbox'"
            :id="tableId + '_' + 'item.data.id'"
            :name="tableId + '_' + 'item.data.id'"
            v-model="item.data[col.id]"
          ></svws-ui-checkbox>

          <input
            v-else-if="col.type === 'number'"
            type="number"
            :id="tableId + '_' + item.data.id"
            :name="tableId + '_' + col.id"
            :value="item.data[col.id]"
            :placeholder="col.placeholder"
          />

          <input
            v-else-if="col.type === 'text'"
            type="text"
            :id="tableId + '_' + item.data.id"
            :name="tableId + '_' + col.id"
            :value="item.data[col.id]"
            :placeholder="col.placeholder"
          />

          <!-- TODO: V-MODEL, FILTER, SORT -->
          <svws-ui-multi-select
            v-else-if="col.type === 'multiselect'"
            :modelValue="item.data[col.id]"
            :id="tableId + '_' + item.data.id"
            :inline="true"
            :items="col.args.items"
            :item-text="col.args.itemText"
          />

          <p v-else>{{ item.data[col.id] }}</p>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="footer || multiSelect">
      <tr>
        <td>
          <div>
            <svws-ui-checkbox
              :modelValue="this.selectedItems === this.items"
              @change="selectAll()"
              v-if="multiSelect"
            />
            <div>
              <slot v-if="footer" name="footer" />
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiTableInput',
  props: {
    tableId: {
      type: String,
      default: 'table' + Date.now(),
    },
    autofocus: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
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
    log(item) {
      console.log(item);
    },
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
            b.data[this.sorting.column]
              .toString()
              .localeCompare(a.data[this.sorting.column].toString(), 'de-DE')
          );
        } else {
          this.items.sort(
            this.items.sort(
              (a, b) =>
                -a.data[this.sorting.column]
                  .toString()
                  .localeCompare(
                    b.data[this.sorting.column].toString(),
                    'de-DE'
                  )
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
        element = document.getElementById(this.tableId + '_row_1');
      } else {
        this.changeCurrent(this.items[index + 1]);
        element = document.getElementById(this.tableId + '_row_' + (index + 1));
      }
      this.focusAndScroll(element);
    },
    onKeyDownSpace() {
      event?.preventDefault();
      if (this.multiSelect) {
        this.toggleSelect(this.current);
      }
    },
    onKeyUp() {
      event?.preventDefault();
      let element = null;
      const index = this.items.indexOf(this.current);
      if (index === 0) {
        this.changeCurrent(this.items[this.items.length - 1]);
        element = document.getElementById(
          this.tableId + '_row_' + this.items.length
        );
      } else {
        this.changeCurrent(this.items[index - 1]);
        element = document.getElementById(this.tableId + '_row_' + index);
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
    if (this.autofocus) {
      document.getElementById(this.tableId + '_row_1')?.focus();
    }
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
          if (this.autofocus) {
            this.changeCurrent(this.items[0]);
          }
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
td {
  @apply svws-ui-border svws-ui-border-dark-20 svws-ui-py-1 svws-ui-px-2;
}

tr:focus {
  @apply svws-ui-outline-none;
}

thead {
  @apply svws-ui-font-bold svws-ui-cursor-pointer svws-ui-select-none;
}

.current {
  @apply svws-ui-bg-light;
}
</style>
