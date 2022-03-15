<template>
  <div class="svws-ui-px-4 svws-ui-py-4" id="contentSidebar">
    <h5
      class="svws-ui-headline-2 svws-ui-text-black svws-ui-flex svws-ui-items-center svws-ui-space-x-2"
    >
      <slot name="header" />
    </h5>
    <div class="svws-ui-mt-4">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { debounce } from 'debounce';

export default defineComponent({
  name: 'SvwsUiContentSidebar',
  props: {
    size: {
      type: String,
      default: 'normal',
      validator: function (value: string) {
        return ['normal', 'large'].includes(value);
      },
    },
  },
  data() {
    return {
      main: null,
      sidebar: null,
      mainWidth: 0,
      sidebarWidth: 0,
      sizeMultiplier: 0,
    };
  },
  mounted() {
    this.main = document.querySelector('main');
    this.sidebar = document.querySelector('#contentSidebar');
    // Faktor für die errechnung der Sidebar-Breite
    switch (this.size) {
      case 'normal':
        this.sizeMultiplier = 0.33;
        break;
      case 'large':
        this.sizeMultiplier = 0.66;
        break;
      default:
        this.sizeMultiplier = 0.33;
    }
    // Initial Breite setzen
    this.handleWidth();
    // Eventlistener für das Resize-Event mit einem Debounce von 100ms um Resourcen des Anwenders zu schonen
    window.addEventListener('resize', debounce(this.handleWidth, 100));
  },
  unmounted() {
    // Eventlistener löschen
    window.removeEventListener('resize', this.handleWidth);
  },
  updated() {
    this.handleWidth();
  },
  methods: {
    handleWidth() {
      this.mainWidth = this.main.clientWidth;
      // Die Breite der Sidebar wird errechnet durch die Breite des Main-Bereichs multipliziert mit dem Faktor der Size-Prop.
      this.sidebarWidth = Math.floor(this.mainWidth * this.sizeMultiplier);
      // Die Sidebar sollte eine Mindestbreite von 256px haben damit eine vernünftige Nutzung gewährleistet wird.
      if (this.sidebarWidth < 256) {
        this.sidebarWidth = 256;
      }
      this.sidebar.style.width = this.sidebarWidth + 'px';
    },
  },
});
</script>

<style></style>
