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
  @apply svws-ui-bg-light;
  @apply svws-ui-inline-flex svws-ui-items-center svws-ui-justify-center;
  @apply svws-ui-py-2.5 svws-ui-px-5;
  @apply svws-ui-rounded-full;
  @apply svws-ui-select-none;
  @apply svws-ui-text-dark svws-ui-text-button svws-ui-font-bold;
  @apply svws-ui-whitespace-nowrap;
}

.svws-ui--tab:focus {
  @apply svws-ui-ring svws-ui-ring-inset svws-ui-ring-primary svws-ui-ring-opacity-75 svws-ui-outline-none;
}

.svws-ui--tab--active {
  @apply svws-ui-bg-dark;
  @apply svws-ui-text-light;
}

.svws-ui--tab:disabled {
  @apply svws-ui-cursor-not-allowed;
  @apply svws-ui-text-disabled-dark;
}
</style>
