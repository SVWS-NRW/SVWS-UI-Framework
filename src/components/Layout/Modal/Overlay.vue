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
  @apply svws-ui-backdrop-filter svws-ui-backdrop-blur-sm;
  @apply svws-ui-bg-dark-80 svws-ui-bg-opacity-50;
  @apply svws-ui-fixed svws-ui-inset-0;
  @apply svws-ui-z-10;
}
</style>
