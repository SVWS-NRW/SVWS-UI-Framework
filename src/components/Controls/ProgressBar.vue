<template>
  <div
    class="svws-ui--progress-bar"
    v-bind:class="{
      'svws-ui--progress-bar--default': size === 'default',
      'svws-ui--progress-bar--small': size === 'small',
    }"
  >
    <div class="svws-ui--progress-bar--label">
      <slot />
    </div>
    <div class="svws-ui--progress-bar--percentage">
      {{ `${progress} %` }}
    </div>
    <div class="svws-ui--progress-bar--bar">
      <div
        class="svws-ui--progress-bar--completed"
        :style="{ width: `${progress}%` }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiProgressBar',
  props: {
    size: {
      type: String,
      default: 'default',
      validator: function (value: string) {
        return ['default', 'small'].includes(value);
      },
    },
    progress: {
      type: Number,
      validator: function (value: number) {
        return 0 <= value && value <= 100;
      },
    },
  },
});
</script>

<style>
.svws-ui--progress-bar {
  @apply flex flex-wrap justify-between;
}

.svws-ui--progress-bar--default {
  @apply text-input;
}

.svws-ui--progress-bar--small {
  @apply text-caption;
}

.svws-ui--progress-bar--bar {
  @apply bg-light;
  @apply overflow-hidden;
  @apply rounded-full;
  @apply w-full;
}

.svws-ui--progress-bar--default .svws-ui--progress-bar--bar {
  @apply h-3;
  @apply mt-3;
}

.svws-ui--progress-bar--small .svws-ui--progress-bar--bar {
  @apply h-1;
  @apply mt-1;
}

.svws-ui--progress-bar--completed {
  @apply bg-primary;
  @apply transition-all;
}

.svws-ui--progress-bar--default .svws-ui--progress-bar--completed {
  @apply h-3;
}

.svws-ui--progress-bar--small .svws-ui--progress-bar--completed {
  @apply h-1;
}
</style>
