<template>
  <div class="svws-ui--header--wrapper">
    <h5 class="svws-ui-headline-2"><slot /></h5>
    <svws-ui-badge v-if="badge" variant="highlight" size="normal">{{
      badge
    }}</svws-ui-badge>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiHeader',
  props: {
    badge: {
      type: String,
    },
  },
});
</script>

<style>
.svws-ui--header--wrapper {
  @apply flex flex-row items-center space-x-2 flex-grow py-4;
}
</style>
