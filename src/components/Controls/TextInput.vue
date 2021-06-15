<template>
  <label
    class="svws-ui--text-input"
    v-bind:class="{
      'svws-ui--text-input-focus': focused,
      'svws-ui--text-input-filled': !!value,
      'svws-ui--text-input-invalid': !valid,
      'svws-ui--text-input-disabled': disabled,
    }"
  >
    <input
      class="svws-ui--text-input--control"
      :type="type"
      :value="value"
      :disabled="disabled"
      :required="required"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @click="onClick"
      @mousedown="onMouseDown"
      @keydown="onKeyDown"
    />
    <span v-if="placeholder" class="svws-ui--text-input--placeholder">{{
      placeholder
    }}</span>
    <svws-ui-icon v-if="icon" :icon="icon" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiTextInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    icon: {
      type: String,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:value', 'focus', 'blur', 'click', 'mousedown', 'keydown'],
  data() {
    return { focused: false };
  },
  methods: {
    focus() {
      // this.$refs.input.focus();
    },
    blur() {
      // this.$refs.input.blur();
    },
    hasFocus() {
      return this.focused;
    },
    onInput(event: { target: HTMLInputElement }) {
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
});
</script>

<style>
.svws-ui--text-input {
  @apply relative;
  @apply flex;
  @apply whitespace-nowrap overflow-hidden;
}

.svws-ui--text-input .svws-ui--icon {
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

.svws-ui--text-input-focus .svws-ui--icon,
.svws-ui--text-input-filled .svws-ui--icon {
  @apply opacity-100;
}

.svws-ui--text-input-invalid .svws-ui--icon {
  @apply text-error;
}

.svws-ui--text-input--control {
  @apply h-9 w-full;
  @apply px-4 py-2;
  @apply border border-black border-opacity-20 rounded;
  @apply bg-white;
  @apply text-input text-black;
  @apply whitespace-nowrap;
}

.svws-ui--text-input-focus .svws-ui--text-input--control,
.svws-ui--text-input-filled .svws-ui--text-input--control {
  @apply border-gray border-opacity-100;
  @apply outline-none;
}

.svws-ui--text-input--control[type='date']::-webkit-inner-spin-button,
.svws-ui--text-input--control[type='date']::-webkit-calendar-picker-indicator {
  @apply opacity-0;
}

.svws-ui--text-input--control[type='date'] {
  color: transparent;
}

.svws-ui--text-input-focus .svws-ui--text-input--control[type='date'],
.svws-ui--text-input-filled .svws-ui--text-input--control[type='date'] {
  @apply text-black;
}

.svws-ui--text-input-disabled .svws-ui--text-input--control {
  @apply cursor-not-allowed;
}

.svws-ui--text-input-invalid .svws-ui--text-input--control {
  @apply border-error;
}

.svws-ui--text-input--placeholder {
  @apply absolute;
  @apply text-input text-gray;
  @apply transform;
  @apply pointer-events-none;

  top: theme('spacing.2');
  left: theme('spacing.4');
}

.svws-ui--text-input-focus .svws-ui--text-input--placeholder,
.svws-ui--text-input-filled .svws-ui--text-input--placeholder {
  @apply px-1;
  @apply bg-white;
  @apply text-caption;
  @apply -translate-y-1/2;

  top: 0;
  left: theme('spacing.1');
}

.svws-ui--text-input-invalid .svws-ui--text-input--placeholder {
  @apply text-error;
}

.svws-ui--text-input-disabled {
  @apply opacity-50;
}

.svws-ui--text-input-focus,
.svws-ui--text-input-filled {
  @apply overflow-visible;
}
</style>
