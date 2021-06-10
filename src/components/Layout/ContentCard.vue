<template>
  <div class="border-b-2 border-dark-20 pb-8 pt-4">
    <h5 class="svws-ui-headline-5">TITLE: {{ title }}</h5>
    <div class="block w-full mt-2">
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
