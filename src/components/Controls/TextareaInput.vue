<template>
  <label
    class="svws-ui--textarea-input"
    :class="{
      'svws-ui--textarea-input-focus': focused,
      'svws-ui--textarea-input-filled': !!value,
      'svws-ui--textarea-input-invalid': !valid,
      'svws-ui--textarea-input-disabled': disabled,
      'svws-ui--textarea-input--statistic': statistic,
      'svws-ui--textarea-input--resize-none': resizeable === 'none',
      'svws-ui--textarea-input--resize-horizontal': resizeable === 'horizontal',
      'svws-ui--textarea-input--resize-vertical': resizeable === 'vertical',
      'svws-ui--textarea-input--resize-both': resizeable === 'both',
    }"
  >
    <textarea
      class="svws-ui--textarea-input--control"
      :value="value"
      :required="required"
      :disabled="disabled"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @click="onClick"
      @mousedown="onMouseDown"
      @keydown="onKeyDown"
    ></textarea>
    <span
      v-if="placeholder"
      class="svws-ui--textarea-input--placeholder"
      :class="{
        'svws-ui--textarea-input--placeholder--required': required,
      }"
      >
        {{ placeholder }}
        <i v-if="statistic" class="svws-ui-ml-2 ri-bar-chart-fill"></i>
      </span>
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
    statistic: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
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
  @apply svws-ui-flex;
  @apply svws-ui-relative;
}

.svws-ui--textarea-input--control {
  @apply svws-ui-bg-white;
  @apply svws-ui-border-opacity-20 svws-ui-border svws-ui-border-black svws-ui-rounded;
  @apply svws-ui-h-24 svws-ui-w-full;
  @apply svws-ui-px-4 svws-ui-py-2;
  @apply svws-ui-text-input svws-ui-text-black;
}

.svws-ui--textarea-input-focus .svws-ui--textarea-input--control,
.svws-ui--textarea-input-filled .svws-ui--textarea-input--control {
  @apply svws-ui-border-gray svws-ui-border-opacity-100;
  @apply svws-ui-outline-none;
}

.svws-ui--textarea-input-disabled .svws-ui--textarea-input--control {
  @apply svws-ui-cursor-not-allowed;
}

.svws-ui--textarea-input-invalid .svws-ui--textarea-input--control {
  @apply svws-ui-border-error;
}

.svws-ui--textarea-input--resize-none .svws-ui--textarea-input--control {
  @apply svws-ui-resize-none;
}

.svws-ui--textarea-input--resize-vertical .svws-ui--textarea-input--control {
  @apply svws-ui-resize-y;
}

.svws-ui--textarea-input--resize-horizontal .svws-ui--textarea-input--control {
  @apply svws-ui-resize-x;
}

.svws-ui--textarea-input--resize-both .svws-ui--textarea-input--control {
  @apply svws-ui-resize;
}

.svws-ui--textarea-input--placeholder {
  @apply svws-ui-absolute;
  @apply svws-ui-pointer-events-none;
  @apply svws-ui-text-input svws-ui-text-gray;
  @apply svws-ui-transform;
  @apply svws-ui-flex svws-ui-items-center;

  top: theme('spacing.2');
  left: theme('spacing.4');
}

.svws-ui--textarea-input--statistic .svws-ui--textarea-input--control {
  @apply svws-ui-border-purple;
  @apply svws-ui-bg-purple svws-ui-bg-opacity-5;
}

.svws-ui--textarea-input--statistic.svws-ui--textarea-input-invalid
  .svws-ui--textarea-input--control {
  @apply svws-ui-border-error;
}

.svws-ui--textarea-input--statistic .svws-ui--textarea-input--placeholder {
  @apply svws-ui-text-purple;
}

.svws-ui--textarea-input--statistic.svws-ui--textarea-input-invalid
  .svws-ui--textarea-input--placeholder {
  @apply svws-ui-text-purple;
}

.svws-ui--textarea-input-focus .svws-ui--textarea-input--placeholder,
.svws-ui--textarea-input-filled .svws-ui--textarea-input--placeholder {
  @apply svws-ui--translate-y-1/2;
  @apply svws-ui-bg-white;
  @apply svws-ui-px-1;
  @apply svws-ui-text-caption;

  top: 0;
  left: theme('spacing.1');
}

.svws-ui--textarea-input-invalid .svws-ui--textarea-input--placeholder {
  @apply svws-ui-text-error;
}

.svws-ui--textarea-input-disabled {
  @apply svws-ui-opacity-50;
}

.svws-ui--textarea-input--placeholder--required:after {
  @apply svws-ui-text-error;
  content: ' *';
}
</style>
