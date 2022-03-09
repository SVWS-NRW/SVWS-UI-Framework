<template>
  <div class="svws-ui--header--wrapper">
    <h5
      class="svws-ui-headline-2 svws-ui-text-black svws-ui-flex svws-ui-items-center svws-ui-space-x-2"
    >
      <slot />
    </h5>
    <svws-ui-badge v-if="badge" :variant="badgeVariant" :size="badgeSize">{{
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
    badgeVariant: {
      type: String,
    },
    badgeSize: {
      type: String,
    },
  },
});
</script>

<style>
.svws-ui--header--wrapper {
  @apply svws-ui-flex svws-ui-flex-row svws-ui-items-center;
  @apply svws-ui-py-4;
  @apply svws-ui-space-x-2;
  @apply svws-ui-flex-shrink-0;
}
</style>
