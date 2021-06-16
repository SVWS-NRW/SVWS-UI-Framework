<template>
  <div class="svws-ui--app-layout--wrapper">
    <div class="svws-ui--app-layout--sidebar-wrapper">
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
  @apply h-full w-full;
  @apply relative;
}

.svws-ui--app-layout--pattern-overlay {
  @apply absolute inset-0 -z-10;
  @apply bg-white bg-opacity-92;
  @apply block;
  @apply w-full h-full;
}

.svws-ui--app-layout--pattern {
  background-image: url('/img/pattern.png');
  background-size: 12.5rem;

  @apply absolute inset-0 -z-20;
  @apply bg-repeat;
}

.svws-ui--app-layout--wrapper {
  @apply absolute inset-0;
  @apply flex flex-row;
}

.svws-ui--app-layout--sidebar-wrapper {
  @apply flex-shrink-0;
  @apply relative z-20;
}
</style>
