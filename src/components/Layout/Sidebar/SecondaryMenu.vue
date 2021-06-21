<template>
  <div class="svws-ui--secondary-menu">
    <h3 class="font-bold text-black text-headline-3">
      <slot name="header" />
    </h3>
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
.svws-ui--secondary-menu {
  @apply bg-light;
  @apply border-r-2 border-dark-20;
  @apply flex flex-col flex-shrink-0;
  @apply max-w-116 min-w-84 w-1/4 h-screen;
  @apply overflow-y-auto;
  @apply px-6 pt-8;
  @apply shadow;
}

.svws-ui--secondary-menu--content {
  @apply flex-grow;
  @apply mt-4;
}
</style>
