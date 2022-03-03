<template>
  <div class="svws-ui--overlay"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiOverlay',
  props: {},
});
</script>

<style>
.svws-ui--overlay {
  @apply svws-ui-backdrop-filter svws-ui-backdrop-blur;
  @apply svws-ui-bg-dark-80 svws-ui-bg-opacity-50;
  @apply svws-ui-absolute svws-ui-top-0 svws-ui-left-0;
  @apply svws-ui-h-full svws-ui-w-full;
  @apply svws-ui-z-50;
}
</style>

