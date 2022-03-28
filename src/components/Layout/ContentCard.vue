<template>
  <div class="svws-ui--content-card--wrapper">
    <div class="svws-ui--content-card--header">
      <h5 class="svws-ui-headline-5 svws-ui--content-card--headline">
        {{ title }}
      </h5>
      <div class="svws-ui--content-card--actions">
        <slot name="actions" />
      </div>
    </div>
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
  @apply svws-ui-flex-shrink-0;
}

.svws-ui--content-card--header {
  @apply svws-ui-flex svws-ui-items-center svws-ui-justify-between;
}

.svws-ui--content-card--actions {
    @apply svws-ui-flex svws-ui-items-center svws-ui-space-x-2;
}
</style>
