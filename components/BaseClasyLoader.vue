<template>
  <clazy-load
    v-if="isLoaded"
    :src="image.src"
    :data-index="index"
    :tag="tag"
    class="cloader"
    @loading="onImageLoading"
    @load="onImageLoad($event)"
    @error="onImageError($event)"
  >
    <transition slot="default" name="fade">
      <nuxt-img
        :alt="image.alt"
        :data-full="image.src"
        :src="image.src"
        class="cloader__image"
        width="500"
        height="500"
        sizes="sm:50vw md:25vw"
        format="webp"
        provider="static"
        quality="70"
        fit="cover"
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
  emits: ['loading', 'load', 'error'],
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
      this.$emit('loading')
    },
    onImageLoad() {
      this.$emit('load')
    },
    onImageError(e) {
      this.$emit('error', e)
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
