<template>
  <div v-if="isActive" class="svws-ui--tab-container" :visible="visible">
    <slot />
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
      isActive: true,
    };
  },
  created() {
    this.$parent.tabs.push(this);
  },
});
</script>

<style>
.svws-ui--tab-container {
  @apply svws-ui-mt-8;
}
</style>
