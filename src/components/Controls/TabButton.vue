<template>
  <button
    class="svws-ui--tab"
    :class="[active ? 'svws-ui--tab--active' : '']"
    :disabled="disabled"
    :active="active"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiTabButton',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style>
.svws-ui--tab {
  @apply bg-light;
  @apply inline-flex items-center justify-center;
  @apply py-2.5 px-5;
  @apply rounded-full;
  @apply select-none;
  @apply text-dark text-button font-bold;
  @apply whitespace-nowrap;
}

.svws-ui--tab:focus {
  @apply ring ring-inset ring-primary ring-opacity-75 outline-none;
}

.svws-ui--tab--active {
  @apply bg-dark;
  @apply text-light;
}

.svws-ui--tab:disabled {
  @apply cursor-not-allowed;
  @apply text-disabled-dark;
}
</style>
