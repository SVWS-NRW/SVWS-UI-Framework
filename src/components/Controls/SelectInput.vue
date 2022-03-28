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
    <select
      class="svws-ui--select-input--control"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      @click="onClick"
      @mousedown="onMouseDown"
      @onkeydown="onKeyDown"
      :disabled="disabled"
    >
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
    <span v-if="placeholder" class="svws-ui--select-input--placeholder">{{
      placeholder
    }}</span>
    <svws-ui-icon class="svws-ui--dropdown--icon"><i-ri-arrow-up-s-line v-if="focused"/><i-ri-arrow-down-s-line v-else/></svws-ui-icon>
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
      default: function () {
        return [];
      },
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
    onChange(event: { target: HTMLInputElement }) {
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
  @apply svws-ui-flex;
  @apply svws-ui-relative;
}

.svws-ui--select-input .svws-ui--icon {
  @apply svws-ui-absolute;
  @apply svws-ui-flex;
  @apply svws-ui-inset-y-0 svws-ui-right-0;
  @apply svws-ui-justify-center svws-ui-items-center;
  @apply svws-ui-opacity-20;
  @apply svws-ui-pointer-events-none;
  @apply svws-ui-rounded;
  @apply svws-ui-w-8;

  margin-top: 1px;
  margin-right: 1px;
  margin-bottom: 1px;
}

.svws-ui--select-input-focus .svws-ui--icon,
.svws-ui--select-input-filled .svws-ui--icon {
  @apply svws-ui-opacity-100;
}

.svws-ui--select-input-invalid .svws-ui--icon {
  @apply svws-ui-text-error;
}

.svws-ui--select-input--control {
  @apply svws-ui-bg-white;
  @apply svws-ui-border svws-ui-border-black svws-ui-border-opacity-20 svws-ui-rounded;
  @apply svws-ui-h-9 svws-ui-w-full;
  @apply svws-ui-px-4 svws-ui-py-2;
  @apply svws-ui-text-input svws-ui-text-black;

  -webkit-appearance: none;
  -moz-appearance: none;
}

.svws-ui--select-input-focus .svws-ui--select-input--control,
.svws-ui--select-input-filled .svws-ui--select-input--control {
  @apply svws-ui-border-gray svws-ui-border-opacity-100;
  @apply svws-ui-outline-none;
}

.svws-ui--select-input-disabled .svws-ui--select-input--control {
  @apply svws-ui-cursor-not-allowed;
}

.svws-ui--select-input-invalid .svws-ui--select-input--control {
  @apply svws-ui-border-error;
}

.svws-ui--select-input--placeholder {
  @apply svws-ui--translate-y-1/2;
  @apply svws-ui-absolute;
  @apply svws-ui-bg-white;
  @apply svws-ui-pointer-events-none;
  @apply svws-ui-px-1;
  @apply svws-ui-text-gray svws-ui-text-caption;
  @apply svws-ui-transform;

  top: 0;
  left: theme('spacing.1');
}

.svws-ui--select-input-invalid .svws-ui--select-input--placeholder {
  @apply svws-ui-text-error;
}

.svws-ui--select-input-disabled {
  @apply svws-ui-opacity-50;
}
</style>
