<template>
  <label class="svws-ui--checkbox">
    <input
      class="svws-ui--checkbox--control"
      type="checkbox"
      :checked="value"
      @input="onInput"
    />
    <span class="svws-ui--checkbox--indicator">
      <svws-ui-icon icon="check" />
    </span>
    <slot />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvwsUiIcon from '../Layout/Icon.vue';

export default defineComponent({
  name: 'SvwsUiCheckbox',
  components: { SvwsUiIcon },
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
.svws-ui--checkbox {
  @apply inline-flex;
  @apply justify-center items-center;
  @apply text-input;
  @apply cursor-pointer;
  @apply select-none;
}

.svws-ui--checkbox--control {
  @apply hidden;
}

.svws-ui--checkbox--indicator {
  @apply inline-flex;
  @apply justify-center items-center;
  @apply w-4;
  @apply h-4;
  @apply mr-2;
  @apply border-2 border-black;
  @apply bg-white;
}

.svws-ui--checkbox--indicator .svws-ui--icon {
  @apply opacity-0;

  font-size: 0.875rem;
}

.svws-ui--checkbox:focus .svws-ui--checkbox--indicator,
.svws-ui--checkbox input:focus + .svws-ui--checkbox--indicator {
  @apply border-primary;
}

.svws-ui--checkbox
  input:checked
  + .svws-ui--checkbox--indicator
  .svws-ui--icon {
  @apply opacity-100;
}
</style>
