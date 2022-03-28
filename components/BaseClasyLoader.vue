<template>
  <clazy-load
    v-if="isLoaded"
    :src="image.src"
    :data-index="index"
    :tag="tag"
    class="cloader"
    itemprop="associatedMedia"
    itemscope
    itemtype="http://schema.org/ImageObject"
    @loading="onImageLoading"
    @load="onImageLoad($event)"
    @error="onImageError($event)"
  >
    <transition slot="default" name="fade">
      <nuxt-img
        class="cloader__image"
        :src="image.src"
        :alt="image.alt"
        :data-full="image.src"
        format="webp"
        provider="static"
        itemprop="thumbnail"
        sizes="sm:360px"
      />
    </transition>
    <transition slot="placeholder" name="fade">
      <div class="cloader__placeholder">
        <img src='img/loading.gif' alt="loading image...">
      </div>
    </transition>
  </clazy-load>
</template>

<script>

import { VueClazyLoad } from 'vue-clazy-load'

export default {
  name:'BaseClazyLoader',
  components: {
    ClazyLoad: VueClazyLoad
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
    tag: {
      type: String,
      default: 'figure'
    },
    options: {
      type: Object,
      default: () => null
    }
  },
  data(){
    return {
      isLoaded: false
    }
  },
  mounted() {
    if(this.image) {
      this.isLoaded = true
    }
  },
  methods: {
    onImageLoading() {
      // console.log('>>>IMAGE LOADING...')
      // this.isLoaded = true
    },
    onImageLoad() {
      // console.log('>>>IMAGE LOADED')
      // this.isLoaded = true
    },
    onImageError(e) {
      console.log('>>>IMAGE ERROR', e)
      this.isLoaded = false
    },
  }
}
</script>

<style lang="postcss" scoped>
.cloader{
  position: relative;
  z-index: 0;

  &__placeholder {
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: #FFF;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
    }
  }

  &__image {}
}

/* transitions */
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: opacity .6s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
  transition: transform 1.2s ease;
}
</style>
