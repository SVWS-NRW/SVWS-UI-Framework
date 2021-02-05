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

<script>
export default {
  name: 'SvwsUiToggle',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.checked);
    },
  },
};
</script>

<style>
.svws-ui--toggle {
  @apply inline-flex;
  @apply text-input;
  @apply cursor-pointer;
  @apply select-none;
}

.svws-ui--toggle--control {
  @apply hidden;
}

.svws-ui--toggle--indicator {
  @apply relative;
  @apply w-9;
  @apply h-5;
  @apply mr-3;
  @apply border-2 border-black rounded-full;
  @apply bg-white;
}

.svws-ui--toggle--indicator:before {
  @apply absolute;
  @apply block;
  @apply w-3;
  @apply h-3;
  @apply rounded-full;
  @apply bg-black;

  content: '';
  top: 0.125rem;
  left: 0.125rem;
}

.svws-ui--toggle input:checked + .svws-ui--toggle--indicator {
  @apply border-primary;
  @apply bg-primary;
}

.svws-ui--toggle input:checked + .svws-ui--toggle--indicator:before {
  @apply bg-white;

  right: 0.125rem;
  left: auto;
}
</style>
