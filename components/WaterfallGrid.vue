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
      <template v-for="(image, i) in items">
        <waterfall-grid-item
          :key="i"
          :image="image"
          :index="i"
        ></waterfall-grid-item>
      </template>
    </masonry>
  </div>
</template>

<script>
// PhotoSwipe implementation - GRID/LAZY
// Photoswipe options (https://photoswipe.com/documentation/options.html)
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
// .wt-fig {
//   opacity: 0;
//   transform: translateZ(0);
//   perspective: 1000px;
//   backface-visibility: hidden;
//   background: rgba(255, 255, 255, 0.1);
//   transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
// }
*/
.wt-fig {
  width: 100%;
  margin-bottom: 5px;
}

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::
Bootstrap 4 breakpoints
*/

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {}

/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {}

/*
::::::::::::::::::::::::::::::::::::::::::::::::::::
Custom media queries
*/

@media (min-width: 400px) {
  .wt-fig {
    margin-bottom: 10px;
  }
}
</style>
