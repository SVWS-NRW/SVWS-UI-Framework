<template>
  <table class="svws-ui--table">
    <thead>
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
          @click="changeSort(col.id)"
        >
          <div class="svws-ui--table--header">
            <span class="svws-ui--table--header--text">{{ col.title }}</span>
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
          </div>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.data.id"
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
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiTable',
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
    selected: {
      type: Object,
    },
  },
  emits: ['update:sort', 'update:asc', 'update:selected'],
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
    changeSort(column: string) {
      if (this.sorting.column === column) {
        this.sorting.asc = !this.sorting.asc;
        this.$emit('update:asc', this.sorting.asc);
      } else {
        this.sorting.column = column;
        this.sorting.asc = true;
        this.$emit('update:sort', this.sorting.column);
        this.$emit('update:asc', this.sorting.asc);
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
      } else if (this.selectedCounter <= this.items.length) {
        this.items.forEach((item) => (item.selected = false));
        this.selectedCounter = 0;
      }
    },
    mousePressed(item) {
      this.changeCurrent(item);
    },
    toggleSelect(item) {
      item.selected = !item.selected;
      console.log(item);
      if (item.selected) {
        this.selectedCounter++;
      } else {
        this.selectedCounter--;
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
      console.log(this.current);
    },
    sort() {
      this.sorting.column = this.sort;
    },
    asc() {
      this.sorting.asc = this.asc;
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
.svws-ui--table--header {
  @apply inline-flex flex-row items-center;
  @apply space-x-2;
  @apply text-black text-button font-bold;
  @apply select-none;
}

.svws-ui--table--row {
  @apply text-black text-button;
}

.svws-ui--table--row:hover {
  @apply cursor-pointer;
}

.svws-ui--table--row-selected {
  @apply text-primary font-bold;
}

.svws-ui--table--row-selected .svws-ui--checkbox {
  @apply font-normal;
}

.svws-ui--table--row-selected .svws-ui--checkbox .svws-ui--checkbox--indicator {
  @apply border-primary;
}

.svws-ui--table--cell {
  @apply border border-dark-20 bg-white px-3 py-1;
}

.svws-ui--table {
  @apply w-full;
}
</style>
