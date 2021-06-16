<template>
  <label class="svws-ui--toggle">
    <input
      class="svws-ui--toggle--control"
      type="checkbox"
      :checked="value"
      @input="onInput"
    />
    <span class="svws-ui--toggle--indicator" />
    <slot />
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
  @apply cursor-pointer;
  @apply inline-flex;
  @apply select-none;
  @apply text-input;
}

.svws-ui--toggle--control {
  @apply hidden;
}

.svws-ui--toggle--indicator {
  @apply bg-white;
  @apply border-2 border-black rounded-full;
  @apply mr-3;
  @apply relative;
  @apply w-9 h-5;
}

.svws-ui--toggle--indicator:before {
  @apply absolute;
  @apply bg-black;
  @apply block;
  @apply rounded-full;
  @apply w-3 h-3;

  content: '';
  left: 0.125rem;
  top: 0.125rem;
}

.svws-ui--toggle input:checked + .svws-ui--toggle--indicator {
  @apply bg-primary;
  @apply border-primary;
}

.svws-ui--toggle input:checked + .svws-ui--toggle--indicator:before {
  @apply bg-white;

  left: auto;
  right: 0.125rem;
}
</style>
