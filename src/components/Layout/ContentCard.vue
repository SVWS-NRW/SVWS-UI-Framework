<template>
  <div class="svws-ui--content-card--wrapper">
    <h5 class="svws-ui-headline-5">{{ title }}</h5>
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiContentCard',
  props: {
    title: {
      type: String,
    },
  },
});
</script>

<style>
.svws-ui--content-card--wrapper {
  @apply border-b-2 border-dark-20 pb-8 pt-4;
}
</style>
