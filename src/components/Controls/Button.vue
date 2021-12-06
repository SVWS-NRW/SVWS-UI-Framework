<template>
  <button
    class="svws-ui--button"
    v-bind:class="{
      'svws-ui--button--primary': type === 'primary',
      'svws-ui--button--secondary': type === 'secondary',
      'svws-ui--button--danger': type === 'danger',
      'svws-ui--button--transparent': type === 'transparent',
      'svws-ui--button--dropdown-action': dropdownAction === true,
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiButton',
  props: {
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
    dropdownAction: {
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
.svws-ui--button {
  @apply svws-ui-border-2 svws-ui-rounded-full;
  @apply svws-ui-px-5 svws-ui-py-2;
  @apply svws-ui-select-none;
  @apply svws-ui-text-button svws-ui-font-bold;
  @apply svws-ui-flex svws-ui-items-center;
}

.svws-ui--button:focus {
  @apply svws-ui-ring svws-ui-outline-none;
}

.svws-ui--button--primary {
  @apply svws-ui-bg-primary;
  @apply svws-ui-border-primary;
  @apply svws-ui-text-white;
}

.svws-ui--button--primary:focus {
  @apply svws-ui-ring-primary svws-ui-ring-opacity-50;
}

.svws-ui--button--secondary {
  @apply svws-ui-bg-transparent;
  @apply svws-ui-border-black;
  @apply svws-ui-text-black;
}

.svws-ui--button--secondary:focus {
  @apply svws-ui-ring-primary svws-ui-ring-opacity-50;
}

.svws-ui--button--danger {
  @apply svws-ui-bg-transparent;
  @apply svws-ui-border-error;
  @apply svws-ui-text-error;
}

.svws-ui--button--danger:focus {
  @apply svws-ui-bg-error;
  @apply svws-ui-ring-error svws-ui-ring-opacity-50;
  @apply svws-ui-text-white;
}

.svws-ui--button--transparent {
  @apply svws-ui-bg-transparent;
  @apply svws-ui-border-transparent;
  @apply svws-ui-text-primary;
}

.svws-ui--button--transparent:hover {
  @apply svws-ui-bg-dark-20 svws-ui-bg-opacity-50;
}

.svws-ui--button--transparent:focus {
  @apply svws-ui-ring-primary;
}

.svws-ui--button:disabled {
  @apply svws-ui-bg-disabled;
  @apply svws-ui-border-disabled-medium;
  @apply svws-ui-cursor-not-allowed;
  @apply svws-ui-text-disabled-dark;
}

.svws-ui--button--dropdown-action {
  @apply svws-ui-pr-3;
  @apply svws-ui-relative svws-ui-z-20;
  @apply svws-ui-rounded-r-none;
}
</style>
