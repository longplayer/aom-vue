<template>
  <div
    ref="$container"
    class="wt-grid"
    @click="atClick($event)"
  >
    <masonry
      class="wt-list"
      itemscope
      itemtype="http://schema.org/ImageGallery"
      :cols="{default: 4, 992: 3, 768: 2, 400: 1}"
      :gutter="{default: '10px', 400: '5px'}"
      :column-class="'wt-col'"
    >
      <waterfall-grid-item
        v-for="(image, i) in items"
        :key="i"
        :image="image"
        :index="i"
      ></waterfall-grid-item>
    </masonry>
  </div>
</template>

<script>
import WaterfallGridItem from './WaterfallGridItem'

export default {
  components: {
    WaterfallGridItem
  },
  props: {
    // Default item
    items: {
      type: Array,
      default () {
        return [
          {
            src: 'http://via.placeholder.com/600x400',
            thumbnail: 'http://via.placeholder.com/128x128',
            w: 600,
            h: 400,
            alt: 'some numbers on a grey background'
          }
        ]
      }
    }
  },
  mounted () {
    this.$photoswipe.listen('beforeChange', (e) => this.beforeChange(e))
  },
  beforeDestroy () {
    this.$photoswipe.unlisten('beforeChange', (e) => this.beforeChange(e))
  },
  methods: {
    atClick (e) {
      if(typeof this.$photoswipe === 'undefined') return

      const items = []
      let index = 0
      const $el = this.$refs.$container.querySelectorAll('img')
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
    beforeChange (args) {
      // console.log('beforeChange', args); // eslint-disable-line
    }
  }
}
</script>

<style lang="postcss">
/*
.wt-fig {
  opacity: 0;
  transform: translateZ(0);
  perspective: 1000px;
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.1);
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
*/

.wt-fig {
  width: 100%;
  margin-bottom: 5px;
  animation: anim 0.8s ease-in-out;
  width: 100%;
  margin: 0 0 1.5rem 0;

  .wt-img {
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 400px) {
  .wt-fig {
    margin-bottom: .75rem;
  }
}
</style>
