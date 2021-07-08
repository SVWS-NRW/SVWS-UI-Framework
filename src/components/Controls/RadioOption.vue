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
  @apply svws-ui-cursor-pointer;
  @apply svws-ui-flex svws-ui-flex-row svws-ui-items-center;
  @apply svws-ui-select-none;
  @apply svws-ui-space-x-2;
  @apply svws-ui-text-input;
}

.svws-ui--radio--indicator {
  @apply svws-ui-appearance-none;
  @apply svws-ui-border-2 svws-ui-border-black svws-ui-rounded-full;
  @apply svws-ui-cursor-pointer;
  @apply svws-ui-flex svws-ui-items-center svws-ui-justify-center svws-ui-flex-shrink-0;
  @apply svws-ui-w-5 svws-ui-h-5;
}

.svws-ui--radio--indicator:focus {
  @apply svws-ui-ring-2 svws-ui-ring-opacity-50 svws-ui-ring-primary svws-ui-outline-none;
}

.svws-ui--radio--indicator:checked::before {
  @apply svws-ui-bg-black;
  @apply svws-ui-block;
  @apply svws-ui-rounded-full;
  @apply svws-ui-w-3 svws-ui-h-3;
  content: '';
}

.svws-ui--radio--indicator:disabled {
  @apply svws-ui-bg-disabled;
  @apply svws-ui-border-disabled-medium;
  @apply svws-ui-cursor-not-allowed;
  @apply svws-ui-text-disabled-dark;
}

.svws-ui--radio--label--disabled {
  @apply svws-ui-cursor-not-allowed;
  @apply svws-ui-text-disabled-dark;
}
</style>
