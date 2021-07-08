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
      {{ `${Number(progress.toFixed(2))} %` }}
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
  @apply svws-ui-flex svws-ui-flex-wrap svws-ui-justify-between;
}

.svws-ui--progress-bar--default {
  @apply svws-ui-text-input;
}

.svws-ui--progress-bar--small {
  @apply svws-ui-text-caption;
}

.svws-ui--progress-bar--bar {
  @apply svws-ui-bg-light;
  @apply svws-ui-overflow-hidden;
  @apply svws-ui-rounded-full;
  @apply svws-ui-w-full;
}

.svws-ui--progress-bar--default .svws-ui--progress-bar--bar {
  @apply svws-ui-h-3;
  @apply svws-ui-mt-3;
}

.svws-ui--progress-bar--small .svws-ui--progress-bar--bar {
  @apply svws-ui-h-1;
  @apply svws-ui-mt-1;
}

.svws-ui--progress-bar--completed {
  @apply svws-ui-bg-primary;
  @apply svws-ui-transition-all;
}

.svws-ui--progress-bar--default .svws-ui--progress-bar--completed {
  @apply svws-ui-h-3;
}

.svws-ui--progress-bar--small .svws-ui--progress-bar--completed {
  @apply svws-ui-h-1;
}
</style>
