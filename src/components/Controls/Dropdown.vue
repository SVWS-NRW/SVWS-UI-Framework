<template>
  <Menu as="div" class="svws-ui--dropdown--wrapper">
    <menu-button
      class="svws-ui--dropdown--button"
      :class="{
        'svws-ui--dropdown--button--primary': variant === 'primary',
        'svws-ui--dropdown--button--secondary': variant === 'secondary',
        'svws-ui--dropdown--button--danger': variant === 'danger',
      }"
      v-slot="{ open }"
      :disabled="disabled"
    >
      <slot name="dropdownButton" />
      <svws-ui-icon
        :icon="open ? 'arrow-up-s' : 'arrow-down-s'"
        class="svws-ui--dropdown--icon"
      />
    </menu-button>
    <menu-items
      as="div"
      class="svws-ui--dropdown--items"
      :class="{
        'svws-ui--dropdown--items--primary': variant === 'primary',
        'svws-ui--dropdown--items--secondary': variant === 'secondary',
        'svws-ui--dropdown--items--danger': variant === 'danger',
      }"
    >
      <slot name="dropdownItems" />
    </menu-items>
  </Menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';
import SvwsUiIcon from '../Layout/Icon.vue';

export default defineComponent({
  name: 'SvwsUiDropdown',
  components: { Menu, MenuButton, MenuItems, SvwsUiIcon },
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
.svws-ui--dropdown--wrapper {
  @apply inline-block;
  @apply relative;
}

.svws-ui--dropdown--button {
  @apply border-2;
  @apply flex items-center;
  @apply px-5 py-2;
  @apply relative z-10;
  @apply rounded-full;
  @apply text-button font-bold;
}

.svws-ui--dropdown--button:focus {
  @apply ring outline-none;
}

.svws-ui--dropdown--button--primary {
  @apply bg-primary;
  @apply border-primary;
  @apply text-white;
}

.svws-ui--dropdown--button--primary:focus {
  @apply ring-primary ring-opacity-50;
}

.svws-ui--dropdown--button--secondary {
  @apply bg-transparent;
  @apply border-black;
  @apply text-black;
}

.svws-ui--dropdown--button--secondary:focus {
  @apply ring-primary ring-opacity-50;
}

.svws-ui--dropdown--button--danger {
  @apply bg-transparent;
  @apply border-error;
  @apply text-error;
}

.svws-ui--dropdown--button--danger:focus {
  @apply bg-error;
  @apply ring-error ring-opacity-50;
  @apply text-white;
}

.svws-ui--dropdown--button:disabled {
  @apply bg-disabled;
  @apply border-disabled-medium;
  @apply cursor-not-allowed;
  @apply text-disabled-dark;
}

.svws-ui--dropdown--icon {
  @apply inline-block;
  @apply ml-1;
}

.svws-ui--dropdown--items {
  @apply absolute z-0 top-4;
  @apply bg-white;
  @apply border-2 border-t-0;
  @apply overflow-hidden;
  @apply pt-6 pb-2;
  @apply rounded-b-3xl;
  @apply w-full;
}

.svws-ui--dropdown--items:focus {
  @apply outline-none;
}

.svws-ui--dropdown--items--primary {
  @apply border-primary;
}

.svws-ui--dropdown--items--secondary {
  @apply border-black;
}

.svws-ui--dropdown--items--danger {
  @apply border-error;
}
</style>
