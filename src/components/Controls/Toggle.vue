<template>
  <label
    class="svws-ui--toggle"
    v-bind:class="{
      'svws-ui--toggle--statistics': statistics,
    }"
  >
    <input
      class="svws-ui--toggle--control"
      type="checkbox"
      :checked="value"
      @input="onInput"
    />
    <span class="svws-ui--toggle--indicator" />
    <span class="svws-ui--toggle--label">
        <slot />
        <i v-if="statistics" class="svws-ui-ml-2 ri-bar-chart-fill"></i>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiToggle',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    statistics: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(event: { target: HTMLInputElement }) {
      this.$emit('input', event.target.checked);
    },
  },
});
</script>

<style>
.svws-ui--toggle {
  @apply svws-ui-cursor-pointer;
  @apply svws-ui-inline-flex;
  @apply svws-ui-select-none;
  @apply svws-ui-text-input;
}

.svws-ui--toggle--control {
  @apply svws-ui-hidden;
}

.svws-ui--toggle--indicator {
  @apply svws-ui-bg-white;
  @apply svws-ui-border-2 svws-ui-border-black svws-ui-rounded-full;
  @apply svws-ui-mr-3;
  @apply svws-ui-relative;
  @apply svws-ui-w-9 svws-ui-h-5;
}

.svws-ui--toggle--statistics {
  @apply svws-ui-text-purple;
}

.svws-ui--toggle--statistics .svws-ui--toggle--indicator {
  @apply svws-ui-border-purple;
}

.svws-ui--toggle--indicator:before {
  @apply svws-ui-absolute;
  @apply svws-ui-bg-black;
  @apply svws-ui-block;
  @apply svws-ui-rounded-full;
  @apply svws-ui-w-3 svws-ui-h-3;

  content: '';
  left: 0.125rem;
  top: 0.125rem;
}

.svws-ui--toggle--statistics .svws-ui--toggle--indicator:before {
  @apply svws-ui-bg-purple;
}

.svws-ui--toggle input:checked + .svws-ui--toggle--indicator {
  @apply svws-ui-bg-primary;
  @apply svws-ui-border-primary;
}

.svws-ui--toggle.svws-ui--toggle--statistics
  input:checked
  + .svws-ui--toggle--indicator {
  @apply svws-ui-bg-purple;
  @apply svws-ui-border-purple;
}

.svws-ui--toggle input:checked + .svws-ui--toggle--indicator:before {
  @apply svws-ui-bg-white;

  left: auto;
  right: 0.125rem;
}

.svws-ui--toggle--label {
    @apply svws-ui-flex svws-ui-items-center;
}
</style>
