<template>
  <Menu as="div" class="svws-ui--dropdown--wrapper">
    <MenuButton
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
    </MenuButton>
    <MenuItems
      as="div"
      class="svws-ui--dropdown--items"
      :class="{
        'svws-ui--dropdown--items--primary': variant === 'primary',
        'svws-ui--dropdown--items--secondary': variant === 'secondary',
        'svws-ui--dropdown--items--danger': variant === 'danger',
      }"
    >
      <slot name="dropdownItems" />
    </MenuItems>
  </Menu>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
  import SvwsUiIcon from '../Layout/Icon.vue';

  export default defineComponent({
    name: 'SvwsUiButton',
    components: { Menu, MenuButton, MenuItems, MenuItem, SvwsUiIcon },
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
    @apply relative inline-block;
  }

  .svws-ui--dropdown--button {
    @apply text-button relative z-10 flex items-center px-5 py-2 font-bold border-2 rounded-full;
  }

  .svws-ui--dropdown--button:focus {
    @apply ring outline-none;
  }

  .svws-ui--dropdown--button--primary {
    @apply bg-primary border-primary text-white;
  }

  .svws-ui--dropdown--button--primary:focus {
    @apply ring-primary ring-opacity-50;
  }

  .svws-ui--dropdown--button--secondary {
    @apply text-black bg-transparent border-black;
  }

  .svws-ui--dropdown--button--secondary:focus {
    @apply ring-primary ring-opacity-50;
  }

  .svws-ui--dropdown--button--danger {
    @apply border-error text-error bg-transparent;
  }

  .svws-ui--dropdown--button--danger:focus {
    @apply bg-error ring-error ring-opacity-50 text-white;
  }

  .svws-ui--dropdown--button:disabled {
    @apply bg-disabled border-disabled-medium text-disabled-dark cursor-not-allowed;
  }

  .svws-ui--dropdown--icon {
    @apply inline-block ml-1;
  }

  .svws-ui--dropdown--items {
    @apply top-4 rounded-b-3xl absolute z-0 w-full pt-6 pb-2 overflow-hidden bg-white border-2 border-t-0;
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


@apply text-button focus:outline-none focus:ring ring-opacity-50 ring-primary relative z-10 flex flex-row items-center px-5 py-2 font-bold border-2 rounded-full;