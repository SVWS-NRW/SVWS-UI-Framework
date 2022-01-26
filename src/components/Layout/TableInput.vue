<template>
  <table>
    <thead>
      <td
        v-for="col in cols"
        :key="col.id"
        :width="col.width"
        @click="changeSort(col)"
      >
        <span>{{ col.title }}</span>
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
      </td>
    </thead>
    <tbody>
        <tr v-for="item in items" :key="item.data.id" :tabindex="this.items.indexOf(item) + 1" :id="'row_' + (this.items.indexOf(item) + 1)" @keydown.down="onKeyDown" @keydown.up="onKeyUp">
            <td v-for="col in cols" :key="item.data[col.id]" :width="col.width" @click="selectItem(item)">
                <input v-if="col.type === 'checkbox'" :id="col.id + '_' + item.data.id" :name="col.id" type="checkbox" :checked="item.data[col.id]">
                <input v-else-if="col.type === 'number'" :id="col.id + '_' + item.data.id" :name="col.id" type="number" :value="item.data[col.id]" :placeholder="col.placeholder">
                <input v-else-if="col.type === 'text'" :id="col.id + '_' + item.data.id" :name="col.id" type="text" :value="item.data[col.id]" :placeholder="col.placeholder">
                <p v-else>
                    {{ item.data[col.id] }}
                </p>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvwsUiIcon from './Icon.vue';
import SvwsUiMultiSelect from '../Controls/MultiSelect.vue';

export default defineComponent({
  name: 'SvwsUiTableInput',
  components: { SvwsUiIcon, SvwsUiMultiSelect },
  props: {
    cols: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
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

    selectItem(item) {
      if (!item) {
        return undefined;
      }
      this.current = item;
      this.$emit('update:selected', item.data);
      return item.data;
    },

    updateData() {
      this.items = this.rows.map((item) => ({ data: item, selected: false }));
    },

    /* KEYBOARD NAVIGATION */
    onKeyDown() {
      event?.preventDefault();
      let element = null;
      const index = this.items.indexOf(this.current);
      if (index + 1 === this.items.length) {
        this.selectItem(this.items[0]);
        element = document.getElementById('row_1');
      } else {
        this.selectItem(this.items[index + 1]);
        element = document.getElementById('row_' + (index + 1));
      }
      this.focusAndScroll(element);
    },

    onKeyUp() {
      event?.preventDefault();
      let element = null;
      const index = this.items.indexOf(this.current);
      if (index === 0) {
        this.selectItem(this.items[this.items.length - 1]);
        element = document.getElementById('row_' + this.items.length);
      } else {
        this.selectItem(this.items[index - 1]);
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
          this.selectItem(this.items[0]);
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
</style>
