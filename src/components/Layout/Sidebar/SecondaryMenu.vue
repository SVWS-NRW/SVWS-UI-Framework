<template>
  <div class="svws-ui--secondary-menu">
    <h3 class="svws-ui--secondary-menu--headline">
      <slot name="headline" />
    </h3>
    <div class="svws-ui--secondary-menu--header">
      <slot name="header" />
    </div>
    <div class="svws-ui--secondary-menu--content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'SvwsUiSecondaryMenu',
});
</script>

<style>
.svws-ui--secondary-menu--headline {
  @apply svws-ui-font-bold svws-ui-text-dark svws-ui-text-headline-3 svws-ui-px-6;
  @apply svws-ui-relative svws-ui-z-20;
}
.svws-ui--secondary-menu {
  @apply svws-ui-relative;
  @apply svws-ui-bg-light;
  @apply svws-ui-border-r-2 svws-ui-border-dark-20;
  @apply svws-ui-flex svws-ui-flex-col svws-ui-flex-shrink-0;
  @apply svws-ui-max-w-116 svws-ui-min-w-84 svws-ui-w-1/4 svws-ui-h-screen;
  @apply svws-ui-overflow-y-auto;
  @apply svws-ui-pt-4;
  @apply svws-ui-shadow;
}

.svws-ui--secondary-menu--header {
  @apply svws-ui-flex-shrink-0;
  @apply svws-ui-relative svws-ui-z-10;
}

.svws-ui--secondary-menu--content {
  @apply svws-ui-flex-grow;
  @apply svws-ui-mt-4;
  @apply svws-ui-overflow-y-auto;
  @apply svws-ui-relative svws-ui-z-0;
}
</style>
