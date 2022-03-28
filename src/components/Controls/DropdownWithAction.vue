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
    <svws-ui-icon class="svws-ui--dropdown-with-action--icon"><i-ri-arrow-up-s-line v-if="open"/><i-ri-arrow-down-s-line v-else/></svws-ui-icon> 
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
  @apply svws-ui-inline-flex svws-ui-items-center;
  @apply svws-ui-relative;
}

.svws-ui--dropdown-with-action--button {
  @apply svws-ui-ml-1;
  @apply svws-ui-border-2;
  @apply svws-ui-flex svws-ui-items-center;
  @apply svws-ui-py-2 svws-ui-pl-2 svws-ui-pr-3;
  @apply svws-ui-relative svws-ui-z-10;
  @apply svws-ui-rounded-full svws-ui-rounded-l-none;
  @apply svws-ui-text-button svws-ui-font-bold;
}

.svws-ui--dropdown-with-action--button:focus {
  @apply svws-ui-ring svws-ui-outline-none;
}

.svws-ui--dropdown-with-action--button--primary {
  @apply svws-ui-bg-primary;
  @apply svws-ui-border-primary;
  @apply svws-ui-text-white;
}

.svws-ui--dropdown-with-action--button--primary:focus {
  @apply svws-ui-ring-primary svws-ui-ring-opacity-50;
}

.svws-ui--dropdown-with-action--button--secondary {
  @apply svws-ui-bg-transparent;
  @apply svws-ui-border-black;
  @apply svws-ui-text-black;
}

.svws-ui--dropdown-with-action--button--secondary:focus {
  @apply svws-ui-ring-primary svws-ui-ring-opacity-50;
}

.svws-ui--dropdown-with-action--button--danger {
  @apply svws-ui-bg-transparent;
  @apply svws-ui-border-error;
  @apply svws-ui-text-error;
}

.svws-ui--dropdown-with-action--button--danger:focus {
  @apply svws-ui-bg-error;
  @apply svws-ui-ring-error svws-ui-ring-opacity-50;
  @apply svws-ui-text-white;
}

.svws-ui--dropdown-with-action--button:disabled {
  @apply svws-ui-bg-disabled;
  @apply svws-ui-border-disabled-medium;
  @apply svws-ui-cursor-not-allowed;
  @apply svws-ui-text-disabled-dark;
}

.svws-ui--dropdown-with-action--icon {
  @apply svws-ui-inline-block;
  @apply svws-ui-mb-px;
}

.svws-ui--dropdown--items {
  @apply svws-ui-absolute svws-ui-z-0 svws-ui-top-4;
  @apply svws-ui-bg-white;
  @apply svws-ui-border-2 svws-ui-border-t-0;
  @apply svws-ui-overflow-hidden;
  @apply svws-ui-pt-6 svws-ui-pb-2;
  @apply svws-ui-rounded-b-3xl;
  @apply svws-ui-w-full;
}

.svws-ui--dropdown--items:focus {
  @apply svws-ui-outline-none;
}

.svws-ui--dropdown--items--primary {
  @apply svws-ui-border-primary;
}

.svws-ui--dropdown--items--secondary {
  @apply svws-ui-border-black;
}

.svws-ui--dropdown--items--danger {
  @apply svws-ui-border-error;
}
</style>
