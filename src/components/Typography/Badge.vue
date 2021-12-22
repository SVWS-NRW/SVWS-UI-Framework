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
      'svws-ui--badge--tiny': size === 'tiny'
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
        return ['big', 'medium', 'normal', 'small', 'tiny'].includes(value);
      },
    },
  },
});
</script>

<style>
.svws-ui--badge {
  @apply svws-ui-border;
  @apply svws-ui-font-bold;
  @apply svws-ui-rounded;
}

.svws-ui--badge--normal {
  @apply svws-ui-px-2 svws-ui-py-1;
  @apply svws-ui-text-body;
}

.svws-ui--badge--tiny {
  @apply svws-ui-px-1 svws-ui-py-0;
  @apply svws-ui-text-button;
}

.svws-ui--badge--small {
  @apply svws-ui-px-2 svws-ui-py-1;
  @apply svws-ui-text-button;
}

.svws-ui--badge--medium {
  @apply svws-ui-px-2.5 svws-ui-py-1.5;
  @apply svws-ui-text-headline-4;
}

.svws-ui--badge--big {
  @apply svws-ui-px-3 svws-ui-py-2;
  @apply svws-ui-text-headline-3;
}

.svws-ui--badge--error {
  @apply svws-ui-bg-error;
  @apply svws-ui-border-error;
  @apply svws-ui-text-white;
}

.svws-ui--badge--primary {
  @apply svws-ui-bg-primary;
  @apply svws-ui-border-primary;
  @apply svws-ui-text-white;
}

.svws-ui--badge--light {
  @apply svws-ui-bg-light;
  @apply svws-ui-border-light;
  @apply svws-ui-text-dark;
}

.svws-ui--badge--success {
  @apply svws-ui-bg-success;
  @apply svws-ui-border-success;
  @apply svws-ui-text-dark;
}

.svws-ui--badge--highlight {
  @apply svws-ui-bg-highlight;
  @apply svws-ui-border-highlight;
  @apply svws-ui-text-dark;
}
</style>
