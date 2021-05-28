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
  @apply font-bold border rounded;
}

.svws-ui--badge--normal {
  @apply text-button px-2 py-1;
}

.svws-ui--badge--small {
  @apply text-caption px-2 py-1;
}

.svws-ui--badge--medium {
  @apply px-2.5 py-1.5 text-body;
}

.svws-ui--badge--big {
  @apply text-headline-5 px-3 py-2;
}

.svws-ui--badge--error {
  @apply bg-error border-error text-white;
}

.svws-ui--badge--primary {
  @apply bg-primary border-primary text-white;
}

.svws-ui--badge--light {
  @apply bg-light text-dark border-light;
}

.svws-ui--badge--success {
  @apply bg-success text-dark border-success;
}

.svws-ui--badge--highlight {
  @apply bg-highlight text-dark border-highlight;
}
</style>
