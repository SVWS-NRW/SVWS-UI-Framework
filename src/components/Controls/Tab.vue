<template>
  <div v-show="isActive" class="svws-ui--tab-container">
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
  @apply mt-8;
}
</style>
