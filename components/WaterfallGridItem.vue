<template>
  <clazy-load
    :src="image.src"
    :data-index="index"
    tag="figure"
    :class="'wt-fig f-fig wt-fig-'+index"
    itemprop="associatedMedia"
    itemscope
    itemtype="http://schema.org/ImageObject"
  >
    <transition name="fade">
      <a
        class="wt-link f-link d-block"
        :href="image.src"
        :title="image.title"
        :data-size="'' + image.w + 'x' + image.h"
        itemprop="contentUrl"
        @click.prevent=""
      >
        <img
          class="wt-img f-img"
          :src="image.src"
          :alt="image.alt"
          itemprop="thumbnail"
        >
      </a>
    </transition>
    <transition slot="placeholder" name="fade">
      <div class="wt-placeholder">
        <img src='@/assets/img/loading.gif'>
      </div>
    </transition>
  </clazy-load>
</template>

<script>
import { VueClazyLoad } from 'vue-clazy-load'

export default {
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
      default: 0
    }
  },
  created () {
    this.$store.dispatch('waterfall/updatePath')
  }
}
</script>

<style lang="postcss" scoped>
.wt-fig{
  position: relative;
  z-index: 0;
}
.wt-placeholder {
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
}
.wt-placeholder img {
  width: 24px;
  height: 24px;
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
