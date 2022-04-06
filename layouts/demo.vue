<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <header class="w-full h-12 p-4 text-center bg-indigo-900 text-white">
      <nuxt-link to="/">Back to ROOT</nuxt-link>
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
  @apply text-gray-700;
}
</style>
