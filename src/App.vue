<template>
  <div id="app">
    <header class="app-header">
      <router-view name="app-header"></router-view>
    </header>
    <main class="app-main">
      <router-view></router-view>
    </main>
    <router-view name="app-footer"></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('initArtworks')
  }
}
</script>

<style lang="scss">
  @import './assets/css/bootstrap/bootstrap-reboot.css';
  @import './assets/css/bootstrap/bootstrap-grid.css';
  @import './assets/scss/main.scss';
</style>
