<template>
  <div class="svws-ui-w-96 svws-ui-px-4 svws-ui-py-4">
    <h5
      class="
        svws-ui-headline-2
        svws-ui-text-black
        svws-ui-flex
        svws-ui-items-center
        svws-ui-space-x-2
      "
    >
      <slot name="header" />
    </h5>
    <div class="svws-ui-mt-4">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiContentSidebar',
});
</script>

<style>
</style>
