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
  @apply max-w-116 h-screen flex flex-col w-1/4 min-w-84 flex-shrink-0 bg-light border-r-2 border-dark-20 shadow px-6 pt-8 overflow-y-auto;
}

.svws-ui--secondary-menu--content {
  @apply flex-grow mt-4;
}
</style>
