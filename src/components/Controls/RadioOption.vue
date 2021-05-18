<template>
  <label class="svws-ui--radio--label" :class="[ disabled ? 'svws-ui--radio--label--disabled' : '' ]">
    <input @input="onInput" type="radio" :name="name" :value="value" :disabled="disabled" :checked="checked" class="svws-ui--radio--indicator">
    <span>{{ label }}</span>
  </label>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: '',
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
        default: false
      },
      checked: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      onInput: function(event: { target: HTMLInputElement }) {
        if (!this.disabled) {
          this.$emit('input', event.target.value);
        }
      },
    },
  });
</script>

<style>
.svws-ui--radio--label {
  @apply text-input flex flex-row items-center space-x-2 cursor-pointer select-none;
}

.svws-ui--radio--indicator {
  @apply appearance-none;
  @apply flex items-center justify-center flex-shrink-0 w-5 h-5 border-2 border-black rounded-full cursor-pointer;
}

.svws-ui--radio--indicator:focus {
  @apply ring-2 ring-opacity-50 ring-primary outline-none;
}

.svws-ui--radio--indicator:checked::before {
  @apply block w-3 h-3 bg-black rounded-full;
  content: "";
}

.svws-ui--radio--indicator:disabled {
  @apply bg-disabled;
  @apply border-disabled-medium;
  @apply text-disabled-dark;
  @apply cursor-not-allowed;
}

.svws-ui--radio--label--disabled {
  @apply text-disabled-dark;
  @apply cursor-not-allowed;
}

</style>