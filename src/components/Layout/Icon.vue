<template>
  <span class="svws-ui--icon"><slot></slot></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiIcon',
});
</script>

<style>
.svws-ui--icon {
  line-height: 1 !important;
}
</style>
