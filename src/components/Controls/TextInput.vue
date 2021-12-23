<template>
  <label
    class="svws-ui--text-input"
    :class="{
      'svws-ui--text-input-focus': focused,
      'svws-ui--text-input-filled': !!modelValue,
      'svws-ui--text-input-invalid': !valid || !emailValid,
      'svws-ui--text-input-disabled': disabled,
      'svws-ui--text-input-readonly': readonly,
      'svws-ui--text-input--icon': icon,
      'svws-ui--text-input--statistic': statistic,
    }"
  >
    <input
      class="svws-ui--text-input--control"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @click="onClick"
      @mousedown="onMouseDown"
      @keydown="onKeyDown"
      ref="input"
    />
    <span
      v-if="placeholder"
      class="svws-ui--text-input--placeholder"
      :class="{
        'svws-ui--text-input--placeholder--required': required,
      }"
    >
      {{ placeholder }}
      <i v-if="statistic" class="svws-ui-ml-2 ri-bar-chart-fill"></i>
    </span>
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
    modelValue: {
      type: [String, Number],
    },
    placeholder: {
      type: String,
    },
    icon: {
      type: String,
    },
    statistic: {
      type: Boolean,
      default: false,
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
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'update:modelValue',
    'focus',
    'blur',
    'click',
    'mousedown',
    'keydown',
  ],
  data() {
    return { focused: false };
  },
  computed: {
    emailValid(): boolean {
      if (this.type !== 'email' || !this.modelValue) return true;
      else {
        return (
          // eslint-disable-next-line no-useless-escape
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))[^@]?$/.test(
            this.modelValue
          ) ||
          // eslint-disable-next-line no-useless-escape
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            this.modelValue
          )
        );
      }
    },
  },
  methods: {
    focus() {
      if (this.$refs.input instanceof HTMLElement) {
        this.$refs.input.focus();
      }
    },
    blur() {
      if (this.$refs.input instanceof HTMLElement) {
        this.$refs.input.blur();
      }
    },
    hasFocus() {
      return this.focused;
    },
    onInput(event: { target: HTMLInputElement }) {
      this.$emit('update:modelValue', event.target.value);
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
  @apply svws-ui-flex;
  @apply svws-ui-relative;
  @apply svws-ui-w-full;
  @apply svws-ui-whitespace-nowrap svws-ui-overflow-hidden;
}

.svws-ui--text-input .svws-ui--icon {
  @apply svws-ui-absolute;
  @apply svws-ui-flex;
  @apply svws-ui-inset-y-0 svws-ui-right-0;
  @apply svws-ui-justify-center svws-ui-items-center;
  @apply svws-ui-opacity-20;
  @apply svws-ui-pointer-events-none;
  @apply svws-ui-rounded;
  @apply svws-ui-w-8;

  margin-bottom: 1px;
  margin-right: 1px;
  margin-top: 1px;
}

.svws-ui--text-input-focus .svws-ui--icon,
.svws-ui--text-input-filled .svws-ui--icon {
  @apply svws-ui-opacity-100;
}

.svws-ui--text-input-invalid .svws-ui--icon {
  @apply svws-ui-text-error;
}

.svws-ui--text-input--control {
  @apply svws-ui-bg-white;
  @apply svws-ui-border svws-ui-border-black svws-ui-border-opacity-20 svws-ui-rounded;
  @apply svws-ui-h-9 svws-ui-w-full;
  @apply svws-ui-px-4 svws-ui-py-2;
  @apply svws-ui-text-input svws-ui-text-black;
  @apply svws-ui-whitespace-nowrap;
}

.svws-ui--text-input-focus .svws-ui--text-input--control,
.svws-ui--text-input-filled .svws-ui--text-input--control {
  @apply svws-ui-border-gray svws-ui-border-opacity-100;
  @apply svws-ui-outline-none;
}

.svws-ui--text-input--control[type='date']::-webkit-inner-spin-button,
.svws-ui--text-input--control[type='date']::-webkit-calendar-picker-indicator {
  @apply svws-ui-opacity-0;
}

.svws-ui--text-input--control[type='date'] {
  color: transparent;
  @apply svws-ui-bg-transparent;
}

.svws-ui--text-input-focus .svws-ui--text-input--control[type='date'],
.svws-ui--text-input-filled .svws-ui--text-input--control[type='date'] {
  @apply svws-ui-text-black;
}

.svws-ui--text-input-disabled .svws-ui--text-input--control {
  @apply svws-ui-cursor-not-allowed;
}

.svws-ui--text-input-readonly .svws-ui--text-input--control {
  @apply svws-ui-cursor-default;
}

.svws-ui--text-input-invalid .svws-ui--text-input--control {
  @apply svws-ui-border-error;
}

.svws-ui--text-input--placeholder {
  @apply svws-ui-absolute;
  @apply svws-ui-pointer-events-none;
  @apply svws-ui-text-input svws-ui-text-gray;
  @apply svws-ui-transform;
  @apply svws-ui-flex svws-ui-items-center;

  top: theme('spacing.2');
  left: theme('spacing.4');
}

.svws-ui--text-input-focus .svws-ui--text-input--placeholder,
.svws-ui--text-input-filled .svws-ui--text-input--placeholder {
  @apply svws-ui--translate-y-1/2;
  @apply svws-ui-bg-white;
  @apply svws-ui-px-1;
  @apply svws-ui-text-caption;

  top: 0;
  left: theme('spacing.1');
}

.svws-ui--text-input-invalid .svws-ui--text-input--placeholder {
  @apply svws-ui-text-error;
}

.svws-ui--text-input--statistic .svws-ui--text-input--control {
  @apply svws-ui-border-purple;
  @apply svws-ui-bg-purple svws-ui-bg-opacity-5;
}

.svws-ui--text-input--statistic.svws-ui--text-input-invalid
  .svws-ui--text-input--control {
  @apply svws-ui-border-error;
}

.svws-ui--text-input--statistic .svws-ui--text-input--placeholder {
  @apply svws-ui-text-purple;
}

.svws-ui--text-input-disabled {
  @apply svws-ui-opacity-50;
}

.svws-ui--text-input-focus,
.svws-ui--text-input-filled {
  @apply svws-ui-overflow-visible;
}

.svws-ui--text-input--placeholder--required:after {
  @apply svws-ui-text-error;
  content: ' *';
}

.svws-ui--text-input--icon .svws-ui--text-input--control {
  @apply svws-ui-pr-8;
}
</style>
