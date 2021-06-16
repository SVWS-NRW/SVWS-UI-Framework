<template>
  <span
    class="svws-ui--badge"
    :class="{
      'svws-ui--badge--primary': variant === 'primary',
      'svws-ui--badge--success': variant === 'success',
      'svws-ui--badge--error': variant === 'error',
      'svws-ui--badge--highlight': variant === 'highlight',
      'svws-ui--badge--light': variant === 'light',
      'svws-ui--badge--big': size === 'big',
      'svws-ui--badge--medium': size === 'medium',
      'svws-ui--badge--normal': size === 'normal',
      'svws-ui--badge--small': size === 'small',
    }"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'SvwsUiBadge',
  props: {
    variant: {
      type: String,
      default: 'light',
      validator: function (value: string) {
        return ['primary', 'success', 'error', 'highlight', 'light'].includes(
          value
        );
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator: function (value: string) {
        return ['big', 'medium', 'normal', 'small'].includes(value);
      },
    },
  },
});
</script>

<style>
.svws-ui--badge {
  @apply border;
  @apply font-bold;
  @apply rounded;
}

.svws-ui--badge--normal {
  @apply px-2 py-1;
  @apply text-body;
}

.svws-ui--badge--small {
  @apply px-2 py-1;
  @apply text-button;
}

.svws-ui--badge--medium {
  @apply px-2.5 py-1.5;
  @apply text-headline-4;
}

.svws-ui--badge--big {
  @apply px-3 py-2;
  @apply text-headline-3;
}

.svws-ui--badge--error {
  @apply bg-error;
  @apply border-error;
  @apply text-white;
}

.svws-ui--badge--primary {
  @apply bg-primary;
  @apply border-primary;
  @apply text-white;
}

.svws-ui--badge--light {
  @apply bg-light;
  @apply border-light;
  @apply text-dark;
}

.svws-ui--badge--success {
  @apply bg-success;
  @apply border-success;
  @apply text-dark;
}

.svws-ui--badge--highlight {
  @apply bg-highlight;
  @apply border-highlight;
  @apply text-dark;
}
</style>
