<template>
  <menu-item v-slot="{ active }" :disabled="this.disabled">
    <button
      class="svws-ui--dropdown--item"
      :class="{
        'svws-ui--dropdown--item--active': active === true,
      }"
      @click="onClick"
    >
      <svws-ui-icon
        class="svws-ui--dropdown--item--icon"
      ><slot></slot></svws-ui-icon>
      <slot />
    </button>
  </menu-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MenuItem } from '@headlessui/vue';
import SvwsUiIcon from '../Layout/Icon.vue';

export default defineComponent({
  name: 'SvwsUiDropdownItem',
  components: { MenuItem, SvwsUiIcon },
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: function (value: string) {
        return ['primary', 'secondary', 'danger'].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick: function (event: MouseEvent) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
  },
});
</script>

<style>
.svws-ui--dropdown--item {
  @apply svws-ui-text-button svws-ui-font-bold svws-ui-text-left svws-ui-text-black;
  @apply svws-ui-flex svws-ui-items-start;
  @apply svws-ui-w-full;
  @apply svws-ui-px-5 svws-ui-py-2;
  @apply svws-ui-border-t-2 svws-ui-border-b-2 svws-ui-border-transparent;
}

.svws-ui--dropdown--item:disabled {
  @apply svws-ui-text-disabled-dark;
  @apply svws-ui-bg-transparent;
  @apply svws-ui-cursor-not-allowed;
}

.svws-ui--dropdown--item:focus {
  @apply svws-ui-ring-2 svws-ui-outline-none;
}

.svws-ui--dropdown--item--active {
  @apply svws-ui-bg-dark-20 svws-ui-bg-opacity-50;
}

.svws-ui--dropdown--items--primary .svws-ui--dropdown--item:focus {
  @apply svws-ui-ring-primary svws-ui-ring-opacity-50;
  @apply svws-ui-border-primary;
}

.svws-ui--dropdown--items--secondary .svws-ui--dropdown--item:focus {
  @apply svws-ui-ring-primary svws-ui-ring-opacity-50;
  @apply svws-ui-border-black;
}

.svws-ui--dropdown--items--danger .svws-ui--dropdown--item:focus {
  @apply svws-ui-ring-error svws-ui-ring-opacity-50;
  @apply svws-ui-border-error;
}

.svws-ui--dropdown--item--icon {
  @apply svws-ui-mr-2;
}
</style>
