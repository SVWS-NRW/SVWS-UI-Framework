<template>
  <label
    class="svws-ui--select-input"
    :class="{
      'svws-ui--select-input-filled': !!value,
      'svws-ui--select-input-focus': focused,
      'svws-ui--select-input-invalid': !valid,
      'svws-ui--select-input-disabled': disabled,
    }"
  >
    <select class="svws-ui--select-input--control" @change="onInput" :disabled="disabled">
      <option v-if="!value" disabled selected>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.index"
        :value="option.index"
        :selected="option.selected"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
    <span
      v-if="placeholder"
      class="svws-ui--select-input--placeholder"
      >{{ placeholder }}</span
    >
    <svws-ui-icon
      :icon="this.focused ? 'arrow-up-s' : 'arrow-down-s'"
      class="svws-ui--dropdown--icon"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiSelectInput',
  props: {
    placeholder: {
      type: String,
    },
    options: {
      type: Array,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.options.forEach((option) => {
      if ('selected' in option) {
        this.value = option.index;
      }
    });
  },
  methods: {
    focus() {
      //this.$refs.input.focus();
    },
    blur() {
      // this.$refs.input.blur();
    },
    hasFocus() {
      return this.focused;
    },
    onInput(event: { target: HTMLInputElement }) {
      this.value = event.target.value;
      this.$emit('update:value', event.target.value);
    },
    onFocus(event: Event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    onBlur(event: Event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    onClick(event: MouseEvent) {
      this.$emit('click', event);
    },
    onMouseDown(event: MouseEvent) {
      this.$emit('mousedown', event);
    },
    onKeyDown(event: InputEvent) {
      this.$emit('keydown', event);
    },
  },
  emits: ['update:value', 'focus', 'blur', 'click', 'mousedown', 'keydown'],
  data() {
    return { focused: false, value: '' };
  },
});
</script>

<style>
.svws-ui--select-input {
  @apply relative;
  @apply flex;
}

.svws-ui--select-input .svws-ui--icon {
  @apply opacity-20;
  @apply absolute;
  @apply inset-y-0 right-0;
  @apply flex;
  @apply justify-center items-center;
  @apply w-8;
  @apply rounded;
  @apply pointer-events-none;

  margin-top: 1px;
  margin-right: 1px;
  margin-bottom: 1px;
}

.svws-ui--select-input-focus .svws-ui--icon,
.svws-ui--select-input-filled .svws-ui--icon {
  @apply opacity-100;
}

.svws-ui--select-input-invalid .svws-ui--icon {
  @apply text-error;
}

.svws-ui--select-input--control {
  @apply h-9 w-full;
  @apply px-4 py-2;
  @apply border border-black border-opacity-20 rounded;
  @apply bg-white;
  @apply text-input text-black;

  -webkit-appearance: none;
  -moz-appearance: none;
}

.svws-ui--select-input-focus .svws-ui--select-input--control,
.svws-ui--select-input-filled .svws-ui--select-input--control {
  @apply border-gray border-opacity-100;
  @apply outline-none;
}

.svws-ui--select-input-disabled .svws-ui--select-input--control {
  @apply cursor-not-allowed;
}

.svws-ui--select-input-invalid .svws-ui--select-input--control {
  @apply border-error;
}

.svws-ui--select-input--placeholder {
  @apply absolute;
  @apply text-gray;
  @apply transform;
  @apply pointer-events-none;
  @apply px-1 bg-white text-caption -translate-y-1/2;
  top: 0;
  left: theme('spacing.1');
}

.svws-ui--select-input-invalid .svws-ui--select-input--placeholder {
  @apply text-error;
}

.svws-ui--select-input-disabled {
  @apply opacity-50;
}
</style>
