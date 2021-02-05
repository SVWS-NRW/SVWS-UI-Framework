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
      <svws-ui-icon :icon="icon" :variant="active ? 'fill' : 'line'" />
    </span>
    <span class="svws-ui--sidebar--menu-item--label">
      <slot />
      <span v-if="subline" class="svws-ui--sidebar--menu-item--subline">
        {{ subline }}
      </span>
    </span>
  </a>
</template>

<script>
import SvwsUiIcon from '../Icon';

export default {
  name: 'SvwsUiSidebarMenuItem',
  components: {
    SvwsUiIcon,
  },
  props: {
    icon: {
      type: String,
    },
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
    onClick: function (event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style>
.svws-ui--sidebar--menu-item {
  @apply flex items-center;
  @apply py-1;
  @apply my-1;
  @apply border-l-2 border-transparent;
  @apply text-white;
  @apply cursor-pointer;
}

.svws-ui--sidebar--menu-item--active {
  @apply border-white;
  @apply font-bold;
}

.svws-ui--sidebar--menu-item--icon {
  @apply flex;
  @apply mr-4 ml-3;
  @apply text-headline-2;
}

.svws-ui--sidebar--menu-item--label {
  @apply flex flex-col;
  @apply text-body;

  line-height: 1.25;
}

.svws-ui--sidebar--menu-item--collapsed .svws-ui--sidebar--menu-item--label {
  @apply hidden;
}

.svws-ui--sidebar--menu-item--subline {
  @apply text-caption font-normal;
}
</style>
