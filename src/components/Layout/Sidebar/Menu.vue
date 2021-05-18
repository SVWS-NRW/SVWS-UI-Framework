<template>
  <div
    class="svws-ui--sidebar--menu"
    :class="{
      'svws-ui--sidebar--menu--collapsed': collapsed,
    }"
  >
    <div class="svws-ui--sidebar--menu--header">
      <slot name="header" />
      <button
        class="svws-ui--sidebar--menu--collapse"
        @click.prevent="onCollapse"
      >
        <svws-ui-icon :icon="collapsed ? 'arrow-right-s' : 'arrow-left-s'" />
      </button>
    </div>
    <div class="svws-ui--sidebar--menu--body">
      <slot />
    </div>
    <div class="svws-ui--sidebar--menu--footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
  // import Nrw from '../../../assets/img/nrw.svg';

  import { defineComponent } from 'vue';
  import SvwsUiIcon from '../Icon.vue';

  export default defineComponent({
    name: 'SvwsUiSidebarMenu',
    components: { SvwsUiIcon },
    props: {
      collapsed: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onCollapse: function () {
        this.$emit('toggle', !this.collapsed);
      },
    },
  });
</script>

<style>
  .svws-ui--sidebar--menu {
    @apply flex flex-col flex-1 min-h-full;
    @apply w-64;
    @apply bg-dark;
  }

  .svws-ui--sidebar--menu--collapsed {
    @apply w-16;
  }

  .svws-ui--sidebar--menu--header {
    @apply relative;
    @apply flex flex-col flex-shrink-0;
    @apply px-4 py-8;
    @apply bg-white;
  }

  .svws-ui--sidebar--menu--collapse {
    @apply absolute;
    @apply bottom-0;
    @apply flex justify-center items-center;
    @apply w-7;
    @apply h-7;
    @apply rounded-full;
    @apply bg-white;
    @apply text-headline-4 text-black;
    @apply transform translate-y-1/2;

    right: theme('spacing.2');
  }

  .svws-ui--sidebar--menu--collapse:focus {
    @apply outline-none;
    @apply ring ring-primary ring-opacity-50;
  }

  .svws-ui--sidebar--menu--body {
    @apply flex flex-col flex-1;
    @apply py-4;
  }

  .svws-ui--sidebar--menu--footer {
    @apply flex flex-col;
    @apply py-4;
  }
</style>
