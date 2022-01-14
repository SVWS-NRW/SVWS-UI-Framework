<template>
  <a
    class="svws-ui--sidebar--menu-item"
    :class="{
      'svws-ui--sidebar--menu-item--active': active,
      'svws-ui--sidebar--menu-item--collapsed': collapsed,
    }"
    href="#"
    @click.prevent="onClick"
  >
    <span class="svws-ui--sidebar--menu-item--icon">
      <svws-ui-icon><slot name="icon"/></svws-ui-icon>
    </span>
    <span class="svws-ui--sidebar--menu-item--label">
      <slot name="label"/>
      <span v-if="subline" class="svws-ui--sidebar--menu-item--subline">
        {{ subline }}
      </span>
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvwsUiIcon from '../Icon.vue';

export default defineComponent({
  name: 'SvwsUiSidebarMenuItem',
  components: {
    SvwsUiIcon,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    subline: {
      type: String,
    },
  },
  methods: {
    onClick: function (event: MouseEvent) {
      this.$emit('click', event);
    },
  },
});
</script>

<style>
.svws-ui--sidebar--menu-item {
  @apply svws-ui-flex svws-ui-items-center;
  @apply svws-ui-py-1;
  @apply svws-ui-my-1;
  @apply svws-ui-border-l-2 svws-ui-border-transparent;
  @apply svws-ui-text-white;
  @apply svws-ui-cursor-pointer;
}

.svws-ui--sidebar--menu-item--active {
  @apply svws-ui-border-white;
  @apply svws-ui-font-bold;
}

.svws-ui--sidebar--menu-item--icon {
  @apply svws-ui-flex;
  @apply svws-ui-mr-4 svws-ui-ml-3;
  @apply svws-ui-text-headline-2;
}

.svws-ui--sidebar--menu-item--label {
  @apply svws-ui-flex svws-ui-flex-col;
  @apply svws-ui-text-body;

  line-height: 1.25;
}

.svws-ui--sidebar--menu-item--collapsed .svws-ui--sidebar--menu-item--label {
  @apply svws-ui-hidden;
}

.svws-ui--sidebar--menu-item--subline {
  @apply svws-ui-text-caption svws-ui-font-normal;
}
</style>
