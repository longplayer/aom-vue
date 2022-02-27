<template>
  <div id="app">
    <header class="app-header">
      <app-menu />
    </header>
    <main class="app-main">
      <router-view></router-view>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppMenu from '@/components/TheMenu'
import AppFooter from '@/components/TheFooter'

export default {
  components: {
    AppMenu,
    AppFooter
  },
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
