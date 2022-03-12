<template>
  <section class="section-gridview">
    <div class="gridview">
      <header>
        <h2 class="app-title">{{ waterfall.title }}</h2>
        <p class="app-subtitle">{{ waterfall.subTitle }}</p>
      </header>
      <ul
        ref="$container"
        class="gridview__list" 
        @click="atClick($event)"
        >
        <!-- cannot use v-for loop because items classes are very specific -->
        <li class="gridview__item gridview__item--xl">
          <button class="gridview__link">
            <base-clasy-loader
              :image="list[0]"
              :index="0"
              class="container-image-cover"
            />
          </button>
        </li>
        <li class="gridview__item">
          <button class="gridview__link">
            <base-clasy-loader
              :image="list[1]"
              :index="1"
              class="container-image-cover"
            />
          </button>
        </li>
        <li class="gridview__item gridview__item--v">
          <button class="gridview__link">
            <base-clasy-loader
              :image="list[2]"
              :index="2"
              class="container-image-cover"
            />
          </button>
        </li>
        <li class="gridview__item gridview__item--h">
          <button class="gridview__link">
            <base-clasy-loader
              :image="list[3]"
              :index="3"
              class="container-image-cover"
            />
          </button>
        </li>
        <li class="gridview__item">
          <button class="gridview__link">
            <base-clasy-loader
              :image="list[4]"
              :index="4"
              class="container-image-cover"
            />
          </button>
        </li>
        <li class="gridview__item gridview__item--h">
          <button class="gridview__link">
            <base-clasy-loader
              :image="list[5]"
              :index="5"
              class="container-image-cover"
            />
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
// import BaseClasyLoader from './BaseClasyLoader.vue'
// grid demo: https://codepen.io/longplayer/pen/vYWomVy
const DEFAULT_IMAGE = 'https://picsum.photos/526'
export default {
  // components: { BaseClasyLoader },
  data() {
    return {
      imagesLimit: 6,
      image: DEFAULT_IMAGE,
      list: [],
      waterfall: this.$store.getters['waterfall/getWaterfallState']
    }
  },
  created() {
    // init store state on page reload
    if(this.waterfall.list.length === 0) {
      this.$store.dispatch('waterfall/initArtworks')
    }
    // random list image
    this.list = this.setRadomIndexList(this.waterfall.list.length, this.imagesLimit)
      .map((index) => this.waterfall.list[index])
  },
  mounted () {
    // console.log(this.$photoswipe)
    this.$photoswipe.listen('beforeChange', (e) => this.beforeChange(e))
  },
  beforeDestroy () {
    this.$photoswipe.unlisten('beforeChange', (e) => this.beforeChange(e))
  },
  methods: {
    atClick (e) {

      if(typeof this.$photoswipe === 'undefined') return

      const items = []
      const $el = this.$refs.$container.querySelectorAll('img')
      let index = 0

      for (const img of $el) {
        if (img instanceof HTMLImageElement) {
          if (img === e.target) {
            index = items.length
          }
          items.push({
            $el: img,
            src: img.src
          })
        }
      }

      this.$photoswipe.open(items, { index })
    },
    setRadomIndexList(length, limit) {

      const list = []
      const getRandomIndex = () => Math.floor(Math.random() * length)

      for(let i = 0; i < limit; i++) {
        let randomIndex = getRandomIndex()
        // generate new randomIndex until it's not include in the array
        while (list.includes(randomIndex)) { randomIndex = getRandomIndex() }
        list.push(randomIndex)
      }
      return list
    },
    beforeChange (args) {
      // console.log('beforeChange', args); // eslint-disable-line
    },
  },

}
</script>

<style lang="postcss" scoped>
section {
  @apply container mx-auto text-center;
  header {
    @apply text-center pb-12;
  }
}

.gridview {
  max-width: 1024px;
  @apply relative mx-auto pt-24;

  &__list {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 125px;
    grid-auto-flow: dense; /* Fill all spaces with fitted images */
  }

  &__item {
    @apply bg-gray-500 cursor-pointer;

    &--h {
      grid-column: span 2;
    }
    &--v {
      grid-row: span 2;
    }
    &--xl {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
  &__link {
    @apply block overflow-hidden w-full h-full;

    .cloader {
      @apply w-full h-full block;
    }
  }
}
</style>
