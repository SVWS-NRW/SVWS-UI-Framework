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
  @apply inline-flex flex-col py-1 space-y-2;
}
</style>
