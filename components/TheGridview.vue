<template>
  <section
    id="section-gridview"
    class="section-gridview"
  >
    <div class="gridview">
      
      <header>
        <h2 class="app-title">{{ waterfall.title }}</h2>
        <p class="app-subtitle">{{ waterfall.subTitle }}</p>
      </header>
      
      <ul
        ref="$container"
        class="gridview__list"
        @click="onClick"
      >
        <li
          v-for="(classvalue, index) in gridViewClassList"
          :key="index"
          :class="[classvalue, 'gridview__item']"
        >
          <button
            class="gridview__link container-image-desaturate container-image-cover"
          >
            <base-clasy-loader
              :image="list[index]"
              :index="index"
              @image="onImageLoad"
            />
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
const DEFAULT_IMAGE = 'https://picsum.photos/526'

// lenght must be equal to 'imagesLimit'
// this can change depending on the items lenght
// grid demo: https://codepen.io/longplayer/pen/vYWomVy
const ITEMS_LAYOUT_CSS_CLASS = [
  'gridview__item--xl',
  '',
  'gridview__item--v',
  'gridview__item--h',
  '',
  'gridview__item--h',
]

export default {
  data() {
    return {
      imagesHTMLCollection: null,
      imagesLimit: 6,
      image: DEFAULT_IMAGE,
      list: [],
      waterfall: this.$store.getters['waterfall/getWaterfallState'],
      gridViewClassList: ITEMS_LAYOUT_CSS_CLASS,
    }
  },
  created() {
    // init store state on page reload
    if (this.waterfall.list.length === 0) {
      this.$store.dispatch('waterfall/initArtworks')
    }
    // random list image
    this.list = this.setRadomIndexList(
      this.waterfall.list.length,
      this.imagesLimit
    ).map((index) => this.waterfall.list[index])
  },
  mounted() {
    this.$photoswipe.listen('beforeChange', (e) => this.beforeChange(e))
  },
  beforeDestroy() {
    this.$photoswipe.unlisten('beforeChange', (e) => this.beforeChange(e))
  },
  methods: {
    onImageLoad(ev) {},
    onClick(ev) {
      if (typeof this.$photoswipe === 'undefined') return

      const $el = this.imagesHTMLCollection
        ? this.imagesHTMLCollection
        : this.$refs.$container.querySelectorAll('img')
      const { index, items } = this.getListAndIndex($el, ev)

      this.imagesHTMLCollection = $el // save image collection for next time
      this.$photoswipe.open(items, { index })
    },
    getListAndIndex($container, ev) {
      let index = 0
      const items = []
      const imageTarget =
        ev.target instanceof HTMLImageElement
          ? ev.target
          : ev.target.querySelector('img')

      for (const img of $container) {
        if (img instanceof HTMLImageElement) {
          if (img === imageTarget) {
            index = items.length
          }
          items.push({
            $el: img,
            src: img.dataset.full, // open fullsize image
          })
        }
      }
      return { index, items }
    },
    setRadomIndexList(length, limit) {
      const randomList = []
      const getRandomIndex = () => Math.floor(Math.random() * length)

      for (let i = 0; i < limit; i++) {
        let randomIndex = getRandomIndex()
        // generate new randomIndex until it's not include in the array
        while (randomList.includes(randomIndex)) {
          randomIndex = getRandomIndex()
        }
        randomList.push(randomIndex)
      }
      return randomList
    },
    beforeChange(args) {
      // console.log('>>beforeChange event', args); // eslint-disable-line
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
    @apply cursor-pointer;

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
