<template>
  <section id="app-waterfall" class="app-waterfall">
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

<style lang="postcss" scoped>
.app-waterfall {
  transition: all 0.6s 0.2s ease;
  @apply container mx-auto p-6;

  header {
    text-align: center;
  }
}
</style>
