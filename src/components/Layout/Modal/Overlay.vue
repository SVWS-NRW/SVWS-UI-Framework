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
  @apply backdrop-filter backdrop-blur-sm;
  @apply bg-light bg-opacity-50;
  @apply fixed inset-0;
}
</style>
