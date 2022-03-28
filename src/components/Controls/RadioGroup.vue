<template>
  <div class="svws-ui--radio">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiRadioGroup',
  components: {},
});
</script>

<style>
.svws-ui--radio {
  @apply svws-ui-inline-flex svws-ui-flex-col;
  @apply svws-ui-py-1;
  @apply svws-ui-space-y-2;
}
</style>
