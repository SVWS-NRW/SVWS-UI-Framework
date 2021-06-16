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
  @apply cursor-pointer;
  @apply inline-flex;
  @apply items-center justify-start;
  @apply select-none;
  @apply text-input;
}

.svws-ui--checkbox--control {
  @apply hidden;
}

.svws-ui--checkbox--indicator {
  @apply bg-white;
  @apply border-2 border-black;
  @apply inline-flex items-center justify-center;
  @apply mr-2;
  @apply w-5 h-5;
}

.svws-ui--checkbox--indicator .svws-ui--icon {
  @apply opacity-0;

  font-size: 1rem;
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
