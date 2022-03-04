<template>
  <section id="app-waterfall" class="app-waterfall container">
    <article>
      <header>
        <h2 class="app-title">{{ waterfall.title }}</h2>
        <p class="app-subtitle">{{ waterfall.subTitle }}</p>
      </header>
      <waterfall-grid
        :items="waterfall.list"
        :title="waterfall.title"
        :sub-title="waterfall.subTitle"
      ></waterfall-grid>

    </article>
  </section>
</template>

<script>
import WaterfallGrid from '@/components/WaterfallGrid'

export default {
  components: {
    WaterfallGrid
  },
  data () {
    return {
      waterfall: this.$store.getters['waterfall/getWaterfallState']
    }
  },
  created() {
    if(this.waterfall.list.length === 0) {
      this.$store.dispatch('waterfall/initArtworks')
    }
  }
}
</script>
