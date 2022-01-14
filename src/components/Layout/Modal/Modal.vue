<template>
  <Dialog :open="isOpen" @close="closeModal" class="svws-ui--modal--wrapper">
    <div class="svws-ui--modal--pageWrapper">
      <svws-ui-overlay @click="closeModal" />
      <div
        class="svws-ui--modal"
        :class="{
          'svws-ui--modal--sm': size === 'small',
          'svws-ui--modal--md': size === 'medium',
          'svws-ui--modal--lg': size === 'large',
        }"
      >
        <div class="svws-ui--modal--titlebar">
          <dialog-title class="svws-ui--modal--title"
            ><slot name="modalTitle"
          /></dialog-title>
          <button @click="closeModal" class="svws-ui--modal--closeButton">
            <svws-ui-icon class="svws-ui--modal--closeIcon"><i-ri-close-line /></svws-ui-icon>
          </button>
        </div>
        <dialog-description class="svws-ui--modal--description">
          <slot name="modalDescription" />
        </dialog-description>

        <slot name="modalContent" />

        <div class="svws-ui--modal--actions">
          <slot name="modalActions" />
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Dialog, DialogTitle, DialogDescription } from '@headlessui/vue';
import SvwsUiOverlay from './Overlay.vue';
import SvwsUiIcon from '../Icon.vue';

export default defineComponent({
  name: 'SvwsUiModal',
  components: {
    Dialog,
    DialogTitle,
    DialogDescription,
    SvwsUiOverlay,
    SvwsUiIcon,
  },
  props: {
    size: {
      type: String,
      default: 'small',
      validator: function (value: string) {
        return ['small', 'medium', 'large'].includes(value);
      },
    },
  },
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
});
</script>

<style>
.svws-ui--modal--closeButton {
  @apply svws-ui-text-dark;
  @apply svws-ui--mr-3;
  @apply svws-ui-flex svws-ui-items-center svws-ui-justify-center;
  @apply svws-ui-rounded-full;
  @apply svws-ui-w-8 svws-ui-h-8;
}

.svws-ui--modal--closeButton:hover {
  @apply svws-ui-bg-light;
}

.svws-ui--modal--closeButton:focus {
  @apply svws-ui-bg-light;
  @apply svws-ui-ring svws-ui-ring-primary svws-ui-ring-opacity-50 svws-ui-outline-none;
}

.svws-ui--modal--closeIcon {
  @apply svws-ui-inline-block;
  @apply svws-ui-ml-0;
}

.svws-ui--modal--pageWrapper {
  @apply svws-ui-flex svws-ui-items-center svws-ui-justify-center;
  @apply svws-ui-min-h-screen;
  @apply svws-ui-p-8;
}
.svws-ui--modal--titlebar {
  @apply svws-ui-flex svws-ui-flex-row svws-ui-items-center svws-ui-justify-between;
  @apply svws-ui-w-full;
}

.svws-ui--modal {
  @apply svws-ui-bg-white;
  @apply svws-ui-flex svws-ui-flex-col svws-ui-items-center;
  @apply svws-ui-mx-auto;
  @apply svws-ui-px-6 svws-ui-py-4;
  @apply svws-ui-relative svws-ui-z-20;
  @apply svws-ui-rounded-md;
  @apply svws-ui-shadow-lg;
  @apply svws-ui-space-y-8;
}

.svws-ui--modal--sm {
  @apply svws-ui-max-w-modal-sm svws-ui-w-full;
}

.svws-ui--modal--md {
  @apply svws-ui-max-w-modal-md svws-ui-w-full;
}

.svws-ui--modal--lg {
  @apply svws-ui-max-w-modal-lg svws-ui-w-full;
}

.svws-ui--modal--title {
  @apply svws-ui-flex-grow;
  @apply svws-ui-text-caption svws-ui-text-black svws-ui-uppercase;
}

.svws-ui--modal--description {
  @apply svws-ui-font-bold svws-ui-text-center svws-ui-text-black;
}

.svws-ui--modal--wrapper {
  @apply svws-ui-fixed svws-ui-inset-0 svws-ui-z-50;
  @apply svws-ui-overflow-y-auto;
}

.svws-ui--modal--actions {
  @apply svws-ui-flex svws-ui-items-center svws-ui-justify-center;
  @apply svws-ui-space-x-4;
}
</style>
