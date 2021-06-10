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
  @apply py-2.5 px-5 rounded-full inline-flex items-center justify-center text-dark bg-light text-button font-bold whitespace-nowrap select-none;
}

.svws-ui--tab:focus {
  @apply ring ring-inset ring-primary ring-opacity-75 outline-none;
}

.svws-ui--tab--active {
  @apply bg-dark text-light;
}

.svws-ui--tab:disabled {
  @apply text-disabled-dark cursor-not-allowed;
}
</style>
