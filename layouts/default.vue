<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <header class="app-header">
      <the-menu />
    </header>
    <main class="app-main">
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<script>
export default {
  created() {
    this.addBodyClass()
  },
  updated() {
    this.addBodyClass()
  },

  methods: {
    addBodyClass() {
      if(this.$dom?.addDeviceTypeClass) {
        this.$dom.addDeviceTypeClass(this.$isMobile)
      }
    },
  }
}
</script>

<style lang="postcss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-gray-700;

  .app-header {
    z-index: 100;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    height: 60px;
    transition: height 0.2s ease;

    @apply absolute top-0 left-0 w-full py-0 px-6;

    @screen x2sm {
      height: 90px;
    }
  }
}
</style>
