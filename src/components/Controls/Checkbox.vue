<template>
  <label
    class="svws-ui--checkbox"
    v-bind:class="{
      'svws-ui--checkbox--disabled': disabled,
      'svws-ui--checkbox--statistics': statistics,
    }"
  >
    <input
      class="svws-ui--checkbox--control"
      type="checkbox"
      v-model="model"
      :value="value"
      :disabled="disabled"
    />
    <span class="svws-ui--checkbox--indicator">
      <svws-ui-icon><i-ri-check-line/></svws-ui-icon>
    </span>
    <span class="svws-ui--checkbox--label">
      <slot />
      <i-ri-bar-chart-fill class="svws-ui-ml-2" v-if="statistics" />
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvwsUiIcon from '../Layout/Icon.vue';

export default defineComponent({
  name: 'SvwsUiCheckbox',
  components: {SvwsUiIcon},
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    modelValue: {
      type: [Boolean, Array],
      required: true,
    },
    statistics: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    model: {
      get(): any {
        return this.modelValue;
      },
      set(value: any) {
        this.$emit('update:modelValue', value);
      },
    },
  },
});
</script>

<style>
.svws-ui--checkbox {
  @apply svws-ui-cursor-pointer;
  @apply svws-ui-inline-flex;
  @apply svws-ui-items-center svws-ui-justify-start;
  @apply svws-ui-select-none;
  @apply svws-ui-text-input;
}

.svws-ui--checkbox--control {
  @apply svws-ui-hidden;
}

.svws-ui--checkbox--indicator {
  @apply svws-ui-bg-white;
  @apply svws-ui-border-2 svws-ui-border-black;
  @apply svws-ui-inline-flex svws-ui-items-center svws-ui-justify-center;
  @apply svws-ui-w-5 svws-ui-h-5;
}

.svws-ui--checkbox--statistics .svws-ui--checkbox--indicator {
  @apply svws-ui-border-purple;
}

.svws-ui--checkbox--indicator .svws-ui--icon {
  @apply svws-ui-opacity-0;

  font-size: 1rem;
}

.svws-ui--checkbox:focus .svws-ui--checkbox--indicator,
.svws-ui--checkbox input:focus + .svws-ui--checkbox--indicator {
  @apply svws-ui-border-primary;
}

.svws-ui--checkbox
  input:checked
  + .svws-ui--checkbox--indicator
  .svws-ui--icon {
  @apply svws-ui-opacity-100;
  @apply svws-ui-text-black;
}

.svws-ui--checkbox--statistics
  input:checked
  + .svws-ui--checkbox--indicator
  .svws-ui--icon {
  @apply svws-ui-opacity-100;
  @apply svws-ui-text-purple;
  @apply svws-ui-bg-purple;
  @apply svws-ui-bg-opacity-5;
}

.svws-ui--checkbox--label {
  @apply svws-ui-ml-2;
  @apply svws-ui-text-black;
  @apply svws-ui-flex svws-ui-items-center;
}

.svws-ui--checkbox--statistics .svws-ui--checkbox--label {
  @apply svws-ui-text-purple;
}
</style>
