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
    @click="onClick"
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
  @apply px-5 py-2;
  @apply border-2 rounded-full;
  @apply text-button font-bold;
  @apply select-none;
}

.svws-ui--button:focus {
  @apply ring;

  outline: none;
}

.svws-ui--button--primary {
  @apply bg-primary;
  @apply border-primary;
  @apply text-white;
}

.svws-ui--button--primary:focus {
  @apply ring-primary ring-opacity-50;
}

.svws-ui--button--secondary {
  @apply bg-transparent;
  @apply border-black;
  @apply text-black;
}

.svws-ui--button--secondary:focus {
  @apply ring-primary ring-opacity-50;
}

.svws-ui--button--danger {
  @apply bg-transparent;
  @apply border-error;
  @apply text-error;
}

.svws-ui--button--danger:focus {
  @apply bg-error;
  @apply text-white;
  @apply ring-error ring-opacity-50;
}

.svws-ui--button--transparent {
  @apply bg-transparent;
  @apply border-transparent;
  @apply text-primary;
}

.svws-ui--button--transparent:hover {
  @apply bg-dark-20 bg-opacity-50;
}

.svws-ui--button--transparent:focus {
  @apply ring-primary;
}

.svws-ui--button:disabled {
  @apply bg-disabled;
  @apply border-disabled-medium;
  @apply text-disabled-dark;
  @apply cursor-not-allowed;
}

.svws-ui--button--dropdown-action {
  @apply relative z-20 pr-3 rounded-r-none;
}
</style>
