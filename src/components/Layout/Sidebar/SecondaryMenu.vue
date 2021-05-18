<template>
  <div class="svws-ui--secondary-menu">
    <slot />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'SvwsUiSecondaryMenu',
    components: {},
    props: {},
    emits: [],
    data() {},
    methods: {},
  });
</script>

<style>
  .svws-ui--secondary-menu {
    @apply min-w-84 max-w-116 bg-light flex-shrink-0 w-1/4 min-h-screen;
  }
</style>