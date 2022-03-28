<template>
  <div class="svws-ui--tooltip">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiTooltip',
});
</script>

<style>
.svws-ui--tooltip {
  @apply svws-ui-block;
  @apply svws-ui-bg-primary;
  @apply svws-ui-text-white svws-ui-text-body;
  @apply svws-ui-rounded;
  @apply svws-ui-px-4 svws-ui-py-2;
}
</style>
