<template>
  <Dialog :open="isOpen" @close="closeModal" class="svws-ui--modal--wrapper">
    <div class="svws-ui--modal--pageWrapper">
      <svws-ui-overlay @click="closeModal" />
      <div class="svws-ui--modal" :class="{ 'svws-ui--modal--sm': size === 'small', 'svws-ui--modal--md': size === 'medium', 'svws-ui--modal--lg': size === 'large' }">
        <div class="svws-ui--modal--titlebar">
          <DialogTitle class="svws-ui--modal--title"><slot name="modalTitle" /></DialogTitle>
          <button @click="closeModal" class="svws-ui--modal--closeButton"><svws-ui-icon class="svws-ui--modal--closeIcon" icon="close" /></button>
        </div>
        <DialogDescription class="svws-ui--modal--description">
          <slot name="modalDescription" />
        </DialogDescription>

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
  import { Dialog, DialogTitle, DialogOverlay, DialogDescription } from '@headlessui/vue';
  import SvwsUiOverlay from './Overlay.vue';
  import SvwsUiIcon from '../Icon.vue';

  export default defineComponent({
    name: 'SvwsUiModal',
    components: { Dialog, DialogTitle, DialogOverlay, DialogDescription, SvwsUiOverlay, SvwsUiIcon },
    props: {
      size: {
        type: String,
        default: 'small',
        validator: function (value: string) {
          return ['small', 'medium', 'large'].includes(
            value
          );
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
      }
    }
  });
</script>

<style>
  .svws-ui--modal--closeButton {
    @apply hover:bg-light focus:bg-light focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 flex items-center justify-center w-8 h-8 -mr-3 bg-transparent rounded-full;
  }

  .svws-ui--modal--closeIcon {
    @apply inline-block ml-0;
  }

  .svws-ui--modal--pageWrapper {
    @apply flex items-center justify-center min-h-screen p-8;
  }
  .svws-ui--modal--titlebar {
    @apply flex flex-row items-center justify-between w-full;
  }

  .svws-ui--modal {
    @apply relative z-10 flex flex-col items-center px-6 py-4 mx-auto space-y-8 bg-white rounded-md shadow-lg;
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
    @apply text-caption flex-grow text-black uppercase;
  }

  .svws-ui--modal--description {
    @apply font-bold text-center text-black;
  }

  .svws-ui--modal--wrapper {
    @apply fixed inset-0 z-10 overflow-y-auto;
  }

  .svws-ui--modal--actions {
    @apply flex items-center justify-center space-x-4;
  }
</style>