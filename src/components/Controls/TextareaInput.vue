<template>
  <label
    class="svws-ui--textarea-input"
    :class="{
      'svws-ui--textarea-input-focus': focused,
      'svws-ui--textarea-input-filled': !!value,
      'svws-ui--textarea-input-invalid': !valid,
      'svws-ui--textarea-input-disabled': disabled,
      'svws-ui--textarea-input--resize-none': resizeable === 'none',
      'svws-ui--textarea-input--resize-horizontal': resizeable === 'horizontal',
      'svws-ui--textarea-input--resize-vertical': resizeable === 'vertical',
      'svws-ui--textarea-input--resize-both': resizeable === 'both',
    }"
  >
    <textarea
      class="svws-ui--textarea-input--control"
      :value="value"
      :disabled="disabled"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @click="onClick"
      @mousedown="onMouseDown"
      @keydown="onKeyDown"
    ></textarea>
    <span v-if="placeholder" class="svws-ui--textarea-input--placeholder">{{
      placeholder
    }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvwsUiTextareaInput',
  props: {
    value: {
      default: '',
    },
    placeholder: {
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
    resizeable: {
      type: String,
      default: 'both',
      validator: function (value: string) {
        return ['both', 'horizontal', 'vertical', 'none'].includes(value);
      },
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
    onFocus(event: FocusEvent) {
      this.focused = true;
      this.$emit('focus', event);
    },
    onBlur(event: FocusEvent) {
      this.focused = false;
      this.$emit('blur', event);
    },
    onClick(event: MouseEvent) {
      this.$emit('click', event);
    },
    onMouseDown(event: MouseEvent) {
      this.$emit('mousedown', event);
    },
    onKeyDown(event: KeyboardEvent) {
      this.$emit('keydown', event);
    },
  },
});
</script>

<style>
.svws-ui--textarea-input {
  @apply relative;
  @apply flex;
}

.svws-ui--textarea-input--control {
  @apply h-24 w-full;
  @apply px-4 py-2;
  @apply border-opacity-20 border border-black rounded;
  @apply bg-white;
  @apply text-input text-black;
}

.svws-ui--textarea-input-focus .svws-ui--textarea-input--control,
.svws-ui--textarea-input-filled .svws-ui--textarea-input--control {
  @apply border-gray border-opacity-100;
  @apply outline-none;
}

.svws-ui--textarea-input-disabled .svws-ui--textarea-input--control {
  @apply cursor-not-allowed;
}

.svws-ui--textarea-input-invalid .svws-ui--textarea-input--control {
  @apply border-error;
}

.svws-ui--textarea-input--resize-none .svws-ui--textarea-input--control {
  @apply resize-none;
}

.svws-ui--textarea-input--resize-vertical .svws-ui--textarea-input--control {
  @apply resize-y;
}

.svws-ui--textarea-input--resize-horizontal .svws-ui--textarea-input--control {
  @apply resize-x;
}

.svws-ui--textarea-input--resize-both .svws-ui--textarea-input--control {
  @apply resize;
}

.svws-ui--textarea-input--placeholder {
  @apply absolute;
  @apply text-input text-gray;
  @apply transform;
  @apply pointer-events-none;

  top: theme('spacing.2');
  left: theme('spacing.4');
}

.svws-ui--textarea-input-focus .svws-ui--textarea-input--placeholder,
.svws-ui--textarea-input-filled .svws-ui--textarea-input--placeholder {
  @apply px-1;
  @apply bg-white;
  @apply text-caption;
  @apply -translate-y-1/2;

  top: 0;
  left: theme('spacing.1');
}

.svws-ui--textarea-input-invalid .svws-ui--textarea-input--placeholder {
  @apply text-error;
}

.svws-ui--textarea-input-disabled {
  @apply opacity-50;
}
</style>
