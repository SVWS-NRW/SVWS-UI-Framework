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
    @apply bg-light backdrop-filter backdrop-blur-sm fixed inset-0 bg-opacity-50;
  }
</style>