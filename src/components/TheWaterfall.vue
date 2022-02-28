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
        :subTitle="waterfall.subTitle"
      ></waterfall-grid>

    </article>
  </section>
</template>

<script>
import WaterfallGrid from '@/components/WaterfallGrid'

export default {
  data () {
    return {
      waterfall: this.$store.getters.appWaterfall
    }
  },
  components: {
    WaterfallGrid
  }
}
</script>
