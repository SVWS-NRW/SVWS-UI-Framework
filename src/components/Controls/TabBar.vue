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
        v-show="tab.visible"
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
  @apply svws-ui-flex svws-ui-items-center;
  @apply svws-ui-overflow-hidden;
  @apply svws-ui-relative;
  @apply svws-ui-rounded-full;
  @apply svws-ui-w-full;
}

.svws-ui--tab-bar {
  @apply svws-ui-bg-light;
  @apply svws-ui-flex svws-ui-flex-row svws-ui-items-center;
  @apply svws-ui-overflow-x-scroll;
  @apply svws-ui-relative;
  @apply svws-ui-rounded-full;
  @apply svws-ui-space-x-2;
  @apply svws-ui-w-full;

  -ms-overflow-style: none; /* Remove Scrollbar in IE and Edge */
  scrollbar-width: none; /* Remove Scrollbar in Firefox */
}

.svws-ui--tab-bar::-webkit-scrollbar {
  display: none; /* Remove Scrollbar in Chromium basesd Browsers */
}

.svws-ui--tab-bar--scroll-button-background {
  @apply svws-ui-absolute svws-ui-z-20;
  @apply svws-ui-h-full;
  @apply svws-ui-pointer-events-none;
  @apply svws-ui-to-light svws-ui-via-light svws-ui-from-transparent;
}

.svws-ui--tab-bar--scroll-button-background-right {
  @apply svws-ui-bg-gradient-to-r;
  @apply svws-ui-pl-8;
  @apply svws-ui-right-0;
  @apply svws-ui-rounded-r-full;
}

.svws-ui--tab-bar--scroll-button-background-left {
  @apply svws-ui-bg-gradient-to-l;
  @apply svws-ui-left-0;
  @apply svws-ui-pr-8;
  @apply svws-ui-rounded-l-full;
}

.svws-ui--tab-bar--scroll-button {
  @apply svws-ui-h-full;
  @apply svws-ui-inline-flex svws-ui-items-center svws-ui-justify-center;
  @apply svws-ui-pointer-events-auto;
  @apply svws-ui-px-3.5;
  @apply svws-ui-rounded-full;
  @apply svws-ui-text-black;
}

.svws-ui--tab-bar--scroll-button:focus {
  @apply svws-ui-ring svws-ui-ring-inset svws-ui-ring-primary svws-ui-ring-opacity-75 svws-ui-outline-none;
}
</style>
