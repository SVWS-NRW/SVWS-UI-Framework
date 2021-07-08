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
  @apply svws-ui-flex svws-ui-flex-col svws-ui-flex-1 svws-ui-min-h-full;
  @apply svws-ui-w-64;
  @apply svws-ui-bg-dark;
}

.svws-ui--sidebar--menu--collapsed {
  @apply svws-ui-w-16;
}

.svws-ui--sidebar--menu--header {
  @apply svws-ui-relative;
  @apply svws-ui-flex svws-ui-flex-col svws-ui-flex-shrink-0;
  @apply svws-ui-px-4 svws-ui-py-8;
  @apply svws-ui-bg-white;
}

.svws-ui--sidebar--menu--collapse {
  @apply svws-ui-absolute;
  @apply svws-ui-bottom-0;
  @apply svws-ui-flex svws-ui-justify-center svws-ui-items-center;
  @apply svws-ui-w-7;
  @apply svws-ui-h-7;
  @apply svws-ui-rounded-full;
  @apply svws-ui-bg-white;
  @apply svws-ui-text-headline-4 svws-ui-text-black;
  @apply svws-ui-transform svws-ui-translate-y-1/2;

  right: theme('spacing.2');
}

.svws-ui--sidebar--menu--collapse:focus {
  @apply svws-ui-outline-none;
  @apply svws-ui-ring svws-ui-ring-primary svws-ui-ring-opacity-50;
}

.svws-ui--sidebar--menu--body {
  @apply svws-ui-flex svws-ui-flex-col svws-ui-flex-1;
  @apply svws-ui-py-4;
}

.svws-ui--sidebar--menu--footer {
  @apply svws-ui-flex svws-ui-flex-col;
  @apply svws-ui-py-4;
}
</style>
