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

<style lang="postcss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


.app-header {
  position: absolute;
  top: 0;
  height: 60px;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  width: 100%;
  padding: 0 5%;
  z-index: 100;
  transition: height 0.2s ease;
}

</style>
