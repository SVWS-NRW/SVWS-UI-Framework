<template>
  <div v-if="isActive" class="svws-ui--tab-container" :visible="isActive">
    <slot v-if="isActive" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
    disabled: {
      type: Boolean,
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    this.$parent.tabs.push(this);
  },
  beforeUnmount() {
    this.$parent.tabs.splice(this.$parent.tabs.indexOf(this), 1);
  },
});
</script>

<style>
.svws-ui--tab-container {
  @apply svws-ui-mt-0 svws-ui-mb-8 svws-ui-px-4 svws-ui-flex-grow svws-ui-overflow-y-auto;
}
</style>
