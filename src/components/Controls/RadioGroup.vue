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
  @apply inline-flex flex-col;
  @apply py-1;
  @apply space-y-2;
}
</style>
