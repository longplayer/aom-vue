<template>
  <div class="wt-grid">
    <masonry class="wt-list"
      itemscope
      itemtype="http://schema.org/ImageGallery"
      :cols="{default: 4, 992: 3, 768: 2, 400: 1}"
      :gutter="{default: '10px', 400: '5px'}"
      :columnClass="'wt-col'"
    >
      <template v-for="(image, i) in items">
        <waterfall-item
          :key="i"
          :image="image"
          :index="i"
        ></waterfall-item>
      </template>
    </masonry>
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

            <span class="rotation-wrapper">
              <i class="material-icons" v-if="options.rotationOn" @click="rotate(-90)">rotate_left</i>
              <i class="material-icons" v-if="options.rotationOn" @click="rotate(90)">rotate_right</i>
            </span>

            <button class="pswp__button pswp__button--share" title="Share"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button
            class="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
            @click="resetAngle"
          ></button>
          <button
            class="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
            @click="resetAngle"
          ></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// PhotoSwipe implementation - GRID/LAZY
import WaterfallItem from './Item'

// Photoswipe plugin imports
// Based on vue-picture-swipe (https://github.com/rap2hpoutre/vue-picture-swipe)
import { initPhotoSwipeFromDOM } from './initPhotoSwipe.js'
import photoSwipe from 'photoswipe/dist/photoswipe'
import photoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

export default {
  props: {
    // Default item
    items: {
      type: Array,
      default: function () {
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
    },

    // Photoswipe options (https://photoswipe.com/documentation/options.html)
    options: {
      default: () => ({}),
      type: Object
    }

  },
  data () {
    return {
      ps: {
        init: initPhotoSwipeFromDOM,
        core: photoSwipe,
        ui: photoSwipeUIDefault
      },
      angle: 0
    }
  },
  mounted () {
    this.ps.init('.wt-list', this, this.ps.core, this.ps.ui)
  },
  methods: {
    rotate: function (newAngle) {
      this.angle = this.angle + newAngle
      this.$el
        .querySelectorAll('.pswp__img')
        .forEach(i => (i.style.transform = `rotate(${this.angle}deg)`))
    },
    resetAngle: function () {
      this.angle = 0
      this.$el
        .querySelectorAll('.pswp__img')
        .forEach(i => (i.style.transform = `rotate(${this.angle}deg)`))
    }
  },
  components: {
    WaterfallItem
  }
}
</script>

<style lang="scss">

// .wt-fig {
//   opacity: 0;
//   transform: translateZ(0);
//   perspective: 1000px;
//   backface-visibility: hidden;
//   background: rgba(255, 255, 255, 0.1);
//   transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
// }

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
