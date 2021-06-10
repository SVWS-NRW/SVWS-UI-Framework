<template>
  <div class="flex flex-row absolute inset-0">
    <div class="flex-shrink-0 z-20 relative">
      <slot name="sidebar" />
    </div>
    <slot name="secondaryMenu" />
    <slot name="main">
      <div class="svws-ui--app-layout--pattern-wrapper">
        <div class="svws-ui--app-layout--pattern-overlay"></div>
        <div class="svws-ui--app-layout--pattern"></div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'SvwsUiAppLayout',
  components: {},
  props: {},
});
</script>

<style>
.svws-ui--app-layout--pattern-wrapper {
  @apply h-full w-full relative;
}

.svws-ui--app-layout--pattern-overlay {
  @apply absolute inset-0 block w-full h-full bg-white bg-opacity-92 -z-10;
}

.svws-ui--app-layout--pattern {
  background-image: url('/images/pattern.png');
  background-size: 12.5rem;

  @apply bg-repeat absolute inset-0 -z-20;
}
</style>
