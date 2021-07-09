<template>
  <div class="svws-ui--content-card--wrapper">
    <h5 class="svws-ui-headline-5 svws-ui--content-card--headline">
      {{ title }}
    </h5>
    <div class="svws-ui-mt-4">
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
  @apply svws-ui-border-dark-20 svws-ui-border-b-2;
  @apply svws-ui-pt-4 svws-ui-pb-8;
}

.svws-ui--content-card--headline {
  @apply svws-ui-text-black;
}
</style>
