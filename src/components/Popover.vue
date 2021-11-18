<template>
  <Popper
    :hover="hover"
    :placement="placement"
    :disableClickAway="disableClickAway"
    :offsetX="offsetX"
    :offsetY="offsetY"
    arrow
  >
    <slot name="trigger" />
    <template #content>
      <slot name="content" />
    </template>
  </Popper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Popper from 'vue3-popper';

export default defineComponent({
  name: 'SvwsUiPopover',
  components: {
    Popper,
  },
  props: {
    /**
     * Preferred placement (the "auto" placements will choose the side with most space.)
     */
    placement: {
      type: String,
      default: 'auto',
      validator: function (value) {
        return [
          'auto',
          'auto-start',
          'auto-end',
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'right',
          'right-start',
          'right-end',
          'left',
          'left-start',
          'left-end',
        ].includes(value);
      },
    },
    /**
     * Disables automatically closing the popover when the user clicks away from it
     */
    disableClickAway: {
      type: Boolean,
      default: false,
    },
    /**
     * Distance in pixels along the trigger element
     */
    offsetX: {
      type: String,
      default: '0',
    },
    /**
     * Distance in pixels away from the trigger element
     */
    offsetY: {
      type: String,
      default: '12',
    },
    /**
     * Trigger the popper on hover
     */
    hover: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped>
  :deep(div[data-v-2e7b3708]) {
    @apply svws-ui-block;
  }

  :deep(.popper #arrow) {
    @apply svws-ui--z-20;
  }

  :deep(.popper #arrow::before) {
    @apply svws-ui-bg-primary;
  }

  :deep(.popper:hover),
  :deep(.popper:hover > #arrow::before) {
    @apply svws-ui-bg-primary;
}

</style>