<template>
  <div class="flex flex-row min-h-screen">
    <div class="flex-shrink-0">
      <slot name="sidebar" />
    </div>
    <div class="flex-shrink-0">
      <slot name="secondaryMenu" />
    </div>
    <div class="flex-grow">
      <slot name="main" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'SvwsUiAppLayout',
    components: {},
    props: {},
    emits: [],
    data() {},
    methods: {},
  });
</script>

<style></style>