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
    <slot name="contentSidebar" />
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
  @apply svws-ui-h-full svws-ui-w-full;
  @apply svws-ui-relative;
}

.svws-ui--app-layout--pattern-overlay {
  @apply svws-ui-absolute svws-ui-inset-0 svws-ui--z-10;
  @apply svws-ui-bg-white svws-ui-bg-opacity-92;
  @apply svws-ui-block;
  @apply svws-ui-w-full svws-ui-h-full;
}

.svws-ui--app-layout--pattern {
  background-image: url('/img/pattern.png');
  background-size: 12.5rem;

  @apply svws-ui-absolute svws-ui-inset-0 svws-ui--z-20;
  @apply svws-ui-bg-repeat;
}

.svws-ui--app-layout--wrapper {
  @apply svws-ui-absolute svws-ui-inset-0;
  @apply svws-ui-flex svws-ui-flex-row;
}

.svws-ui--app-layout--sidebar-wrapper {
  @apply svws-ui-flex-shrink-0;
  @apply svws-ui-relative svws-ui-z-20;
}
</style>
