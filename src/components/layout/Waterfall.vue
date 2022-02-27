<template>
  <section id="app-waterfall" class="app-waterfall container">
    <article>
      <header>
        <h2 class="app-title">{{ waterfall.title }}</h2>
        <p class="app-subtitle">{{ waterfall.subTitle }}</p>
      </header>

      <waterfall-grid
        :items="waterfall.list"
        :options="{}"
        :title="waterfall.title"
        :subTitle="waterfall.subTitle"
      ></waterfall-grid>

    </article>
  </section>
</template>

<script>
import WaterfallGrid from '@/components/layout/Waterfall/Grid'

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
