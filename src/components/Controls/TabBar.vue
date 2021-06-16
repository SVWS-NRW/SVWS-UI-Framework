<template>
  <div class="svws-ui--tab-bar--wrapper">
    <div
      v-if="scrolled"
      class="svws-ui--tab-bar--scroll-button-background svws-ui--tab-bar--scroll-button-background-left"
    >
      <button class="svws-ui--tab-bar--scroll-button" @click="scroll('left')">
        <svws-ui-icon icon="arrow-left" />
      </button>
    </div>
    <div class="svws-ui--tab-bar" id="content">
      <svws-ui-tab-button
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :id="tab.title"
        @click="selectTab(index)"
        :active="index === this.selectedIndex ? true : false"
        :disabled="tab.disabled"
      >
        {{ tab.title }}
      </svws-ui-tab-button>
    </div>
    <div
      v-if="!scrolledMax"
      class="svws-ui--tab-bar--scroll-button-background svws-ui--tab-bar--scroll-button-background-right"
    >
      <button class="svws-ui--tab-bar--scroll-button" @click="scroll('right')">
        <svws-ui-icon icon="arrow-right" />
      </button>
    </div>
  </div>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvwsUiTabButton from './TabButton.vue';

export default defineComponent({
  name: 'SvwsUiTabBar',
  components: { SvwsUiTabButton },
  data() {
    return {
      scrolled: false,
      scrolledMax: false,
      element: null,
      scrollFactor: 4,
      maxScrollLeft: null,
      selectedIndex: 0,
      tabs: [],
    };
  },
  mounted() {
    this.selectTab(this.selectedIndex);
    this.element = document.querySelector('#content');
    this.maxScrollLeft = this.element.scrollWidth - this.element.clientWidth;
    this.scrolledMax = this.element.scrollLeft >= this.maxScrollLeft;
    this.element.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
  },
  unmounted() {
    this.element.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
  },
  updated() {
    this.handleScroll();
  },
  methods: {
    selectTab(selectedTab) {
      this.selectedIndex = selectedTab;
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === selectedTab;
      });
    },
    handleScroll() {
      this.scrolled = this.element.scrollLeft > 0;
      this.maxScrollLeft = this.element.scrollWidth - this.element.clientWidth;
      this.scrolledMax = this.element.scrollLeft >= this.maxScrollLeft;
    },
    scroll(direction) {
      let dir = direction == 'left' ? -1 : 1;
      this.element.scrollBy({
        top: 0,
        left: (dir * this.element.scrollWidth) / this.scrollFactor,
        behavior: 'smooth',
      });
    },
  },
});
</script>

<style>
.svws-ui--tab-bar--wrapper {
  @apply flex items-center;
  @apply overflow-hidden;
  @apply relative;
  @apply rounded-full;
  @apply w-full;
}

.svws-ui--tab-bar {
  @apply bg-light;
  @apply flex flex-row items-center;
  @apply overflow-x-scroll;
  @apply relative;
  @apply rounded-full;
  @apply space-x-2;
  @apply w-full;

  -ms-overflow-style: none; /* Remove Scrollbar in IE and Edge */
  scrollbar-width: none; /* Remove Scrollbar in Firefox */
}

.svws-ui--tab-bar::-webkit-scrollbar {
  display: none; /* Remove Scrollbar in Chromium basesd Browsers */
}

.svws-ui--tab-bar--scroll-button-background {
  @apply absolute z-20;
  @apply h-full;
  @apply pointer-events-none;
  @apply to-light via-light from-transparent;
}

.svws-ui--tab-bar--scroll-button-background-right {
  @apply bg-gradient-to-r;
  @apply pl-8;
  @apply right-0;
  @apply rounded-r-full;
}

.svws-ui--tab-bar--scroll-button-background-left {
  @apply bg-gradient-to-l;
  @apply left-0;
  @apply pr-8;
  @apply rounded-l-full;
}

.svws-ui--tab-bar--scroll-button {
  @apply h-full;
  @apply inline-flex items-center justify-center;
  @apply pointer-events-auto;
  @apply px-3.5;
  @apply rounded-full;
}

.svws-ui--tab-bar--scroll-button:focus {
  @apply ring ring-inset ring-primary ring-opacity-75 outline-none;
}
</style>
