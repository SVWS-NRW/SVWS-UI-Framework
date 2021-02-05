<template>
  <i class="svws-ui--icon" :class="`ri-${icon}-${variant}`" />
</template>

<script>
export default {
  name: 'SvwsUiIcon',
  props: {
    icon: {
      type: String,
    },
    variant: {
      type: String,
      default: 'line',
      validator: function (value) {
        return ['line', 'fill'].includes(value);
      },
    },
  },
};
</script>

<style>
.svws-ui--icon {
  line-height: 1 !important;
}
</style>
