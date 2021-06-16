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
  @apply border-dark-20 border-b-2;
  @apply pt-4 pb-8;
}
</style>
