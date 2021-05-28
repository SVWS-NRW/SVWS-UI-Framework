<template>
  <Menu as="div" class="svws-ui--dropdown-with-action--wrapper">
    <slot name="actionButton" />
    <menu-button
      class="svws-ui--dropdown-with-action--button"
      :class="{
        'svws-ui--dropdown-with-action--button--primary': variant === 'primary',
        'svws-ui--dropdown-with-action--button--secondary':
          variant === 'secondary',
        'svws-ui--dropdown-with-action--button--danger': variant === 'danger',
      }"
      v-slot="{ open }"
      :disabled="dropdownDisabled"
    >
      <svws-ui-icon
        :icon="open ? 'arrow-up-s' : 'arrow-down-s'"
        class="svws-ui--dropdown-with-action--icon"
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
  name: 'SvwsUiDropdownWithAction',
  components: { Menu, MenuButton, MenuItems, SvwsUiIcon },
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: function (value: string) {
        return ['primary', 'secondary', 'danger'].includes(value);
      },
    },
    type: {
      type: String,
      default: 'primary',
      validator: function (value: string) {
        return ['primary', 'secondary', 'danger', 'transparent'].includes(
          value
        );
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dropdownDisabled: {
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
.svws-ui--dropdown-with-action--wrapper {
  @apply relative inline-flex items-center;
}

.svws-ui--dropdown-with-action--button {
  @apply text-button relative z-10 flex items-center py-2 pl-2 pr-3 ml-1 font-bold border-2 rounded-full rounded-l-none;
}

.svws-ui--dropdown-with-action--button:focus {
  @apply ring outline-none;
}

.svws-ui--dropdown-with-action--button--primary {
  @apply bg-primary border-primary text-white;
}

.svws-ui--dropdown-with-action--button--primary:focus {
  @apply ring-primary ring-opacity-50;
}

.svws-ui--dropdown-with-action--button--secondary {
  @apply text-black bg-transparent border-black;
}

.svws-ui--dropdown-with-action--button--secondary:focus {
  @apply ring-primary ring-opacity-50;
}

.svws-ui--dropdown-with-action--button--danger {
  @apply border-error text-error bg-transparent;
}

.svws-ui--dropdown-with-action--button--danger:focus {
  @apply bg-error ring-error ring-opacity-50 text-white;
}

.svws-ui--dropdown-with-action--button:disabled {
  @apply bg-disabled border-disabled-medium text-disabled-dark cursor-not-allowed;
}

.svws-ui--dropdown-with-action--icon {
  @apply inline-block mb-px;
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
