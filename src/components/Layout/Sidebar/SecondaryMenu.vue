<template>
  <div class="svws-ui--secondary-menu">
    <div class="pb-8">
      <h3 class="font-bold text-black text-headline-3">
        <slot name="header" />
      </h3>
    </div>
    <slot name="content" />
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
  @apply max-w-116 h-screen w-1/4 min-w-84 flex-shrink-0 bg-light border-r-2 border-dark-20 shadow px-6 pt-8 overflow-y-auto;
}
</style>
