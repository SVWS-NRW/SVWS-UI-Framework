<template>
  <label
    class="svws-ui--radio--label"
    :class="[disabled ? 'svws-ui--radio--label--disabled' : '']"
  >
    <input
      @input="onInput"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :checked="checked"
      class="svws-ui--radio--indicator"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiRadioOption',
  components: {},
  props: {
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput: function (event: { target: HTMLInputElement }) {
      if (!this.disabled) {
        this.$emit('input', event.target.value);
      }
    },
  },
});
</script>

<style>
.svws-ui--radio--label {
  @apply cursor-pointer;
  @apply flex flex-row items-center;
  @apply select-none;
  @apply space-x-2;
  @apply text-input;
}

.svws-ui--radio--indicator {
  @apply appearance-none;
  @apply border-2 border-black rounded-full;
  @apply cursor-pointer;
  @apply flex items-center justify-center flex-shrink-0;
  @apply w-5 h-5;
}

.svws-ui--radio--indicator:focus {
  @apply ring-2 ring-opacity-50 ring-primary outline-none;
}

.svws-ui--radio--indicator:checked::before {
  @apply bg-black;
  @apply block;
  @apply rounded-full;
  @apply w-3 h-3;
  content: '';
}

.svws-ui--radio--indicator:disabled {
  @apply bg-disabled;
  @apply border-disabled-medium;
  @apply cursor-not-allowed;
  @apply text-disabled-dark;
}

.svws-ui--radio--label--disabled {
  @apply cursor-not-allowed;
  @apply text-disabled-dark;
}
</style>
