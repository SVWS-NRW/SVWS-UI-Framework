<template>
  <menu-item v-slot="{ active }" :disabled="this.disabled">
    <button
      class="svws-ui--dropdown--item"
      :class="{
        'svws-ui--dropdown--item--active': active === true,
      }"
      :icon="icon"
      @click="onClick"
    >
      <svws-ui-icon
        v-if="icon"
        :icon="icon"
        class="svws-ui--dropdown--item--icon"
      />
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
    icon: {
      type: String,
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
  @apply text-button font-bold text-left text-black;
  @apply flex items-start;
  @apply w-full;
  @apply px-5 py-2;
  @apply border-t-2 border-b-2 border-transparent;
}

.svws-ui--dropdown--item:disabled {
  @apply text-disabled-dark;
  @apply bg-transparent;
  @apply cursor-not-allowed;
}

.svws-ui--dropdown--item:focus {
  @apply ring-2 outline-none;
}

.svws-ui--dropdown--item--active {
  @apply bg-dark-20 bg-opacity-50;
}

.svws-ui--dropdown--items--primary .svws-ui--dropdown--item:focus {
  @apply ring-primary ring-opacity-50;
  @apply border-primary;
}

.svws-ui--dropdown--items--secondary .svws-ui--dropdown--item:focus {
  @apply ring-primary ring-opacity-50;
  @apply border-black;
}

.svws-ui--dropdown--items--danger .svws-ui--dropdown--item:focus {
  @apply ring-error ring-opacity-50;
  @apply border-error;
}

.svws-ui--dropdown--item--icon {
  @apply mr-2;
}
</style>
