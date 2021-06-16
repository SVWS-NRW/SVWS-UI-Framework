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
            <svws-ui-icon class="svws-ui--modal--closeIcon" icon="close" />
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
  @apply -mr-3;
  @apply flex items-center justify-center;
  @apply rounded-full;
  @apply w-8 h-8;
}

.svws-ui--modal--closeButton:hover {
  @apply bg-light;
}

.svws-ui--modal--closeButton:focus {
  @apply bg-light;
  @apply ring ring-primary ring-opacity-50 outline-none;
}

.svws-ui--modal--closeIcon {
  @apply inline-block;
  @apply ml-0;
}

.svws-ui--modal--pageWrapper {
  @apply flex items-center justify-center;
  @apply min-h-screen;
  @apply p-8;
}
.svws-ui--modal--titlebar {
  @apply flex flex-row items-center justify-between;
  @apply w-full;
}

.svws-ui--modal {
  @apply bg-white;
  @apply flex flex-col items-center;
  @apply mx-auto;
  @apply px-6 py-4;
  @apply relative z-10;
  @apply rounded-md;
  @apply shadow-lg;
  @apply space-y-8;
}

.svws-ui--modal--sm {
  @apply max-w-modal-sm w-full;
}

.svws-ui--modal--md {
  @apply max-w-modal-md w-full;
}

.svws-ui--modal--lg {
  @apply max-w-modal-lg w-full;
}

.svws-ui--modal--title {
  @apply flex-grow;
  @apply text-caption text-black uppercase;
}

.svws-ui--modal--description {
  @apply font-bold text-center text-black;
}

.svws-ui--modal--wrapper {
  @apply fixed inset-0 z-10;
  @apply overflow-y-auto;
}

.svws-ui--modal--actions {
  @apply flex items-center justify-center;
  @apply space-x-4;
}
</style>
