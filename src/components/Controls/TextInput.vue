<template>
  <label class="svws-ui--text-input">
    <input
      class="svws-ui--text-input--control"
      type="text"
      :value="value"
      @input="onInput"
    />
    <span
      v-if="placeholder"
      class="svws-ui--text-input--placeholder"
      v-bind:class="{
        'svws-ui--text-input--placeholder--pinned': value !== '',
      }"
      >{{ placeholder }}</span
    >
  </label>
</template>

<script>
export default {
  name: 'SvwsUiTextInput',
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style>
.svws-ui--text-input {
  @apply relative;
  @apply flex;
}

.svws-ui--text-input--control {
  @apply px-4 py-2;
  @apply border border-black border-opacity-20 rounded;
  @apply bg-white;
  @apply text-input text-black;
}

.svws-ui--text-input--control:focus {
  @apply border-gray border-opacity-100;
  @apply outline-none;
}

.svws-ui--text-input--placeholder {
  @apply absolute;
  @apply text-input text-gray;
  @apply transform;
  @apply pointer-events-none;

  top: theme('spacing.2');
  left: theme('spacing.4');
}

.svws-ui--text-input--placeholder--pinned,
.svws-ui--text-input--control:focus + .svws-ui--text-input--placeholder {
  @apply px-1;
  @apply bg-white;
  @apply text-caption;
  @apply -translate-y-1/2;

  top: 0;
  left: theme('spacing.1');
}
</style>
