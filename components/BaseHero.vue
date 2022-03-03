<template>
  <section id="app-hero" class="app-hero">
    <div class="h-area">
      <div
        class="h-item"
        :data-hero-img="loadImage"
        :data-hero-thumbnail="loadImage"
      >
        <div class="h-caption container">
          <p v-if="hero.place.length" class="h-place">{{ hero.place }} :</p>
          <p v-if="hero.title.lenght" class="h-title">{{ hero.title }}</p>
          <p v-if="hero.date.str.length" class="h-date">{{ hero.date.str }}</p>

          <!-- TODO: reactivate v-scroll directive when possible -->
          <!-- v-scroll-to="hero.button.href" -->
          <base-button :btn="hero.button"></base-button>
        </div>
        <base-figure class="h-fig">
          <template slot="image">
            <base-image
              class="h-img"
              :src="loadImage"
              :alt="hero.image.alt"
            ></base-image>
          </template>
        </base-figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      img: 'https://placehold.it/1920x1080',
    }
  },
  computed: {
    loadImage() {
      return require('@/assets/img/' + this.img)
    },
    showHighlight() {
      return this.$store.getters['events/getShowHighlight']
    },
    hero() {
      return this.$store.getters['hero/getHeroState']
    },
    highlight() {
      return this.showHighlight
        ? this.$store.getters['events/getHighlight']
        : null
    },
  },
  created() {
    this.img = this.hero.image.path

    // update button anchor link
    if (!this.showHighlight) {
      this.$store.dispatch('hero/updateProperty', {
        property: 'title',
        value: '',
      })
      this.$store.dispatch('hero/updateProperty', {
        property: 'place',
        value: '',
      })
      this.$store.dispatch('hero/updateProperty', {
        property: 'date',
        value: {
          begin: '',
          end: '',
          str: '',
        },
      })
      this.$store.dispatch('hero/updateButtonProp', {
        property: 'label',
        value: 'Voir la selection',
      })
      this.$store.dispatch('hero/updateButtonProp', {
        property: 'href',
        value: '#app-waterfall',
      })
    } else {
      this.$store.dispatch('hero/updateButtonProp', {
        property: 'href',
        value: `#${this.highlight.id}`,
      })
    }
  },
}
</script>

<style Lang="postcss">
/*
*   main
* ============================================ */

.h-area {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.h-item {
  height: 100%;
  @apply flex flex-wrap;
}

.h-fig {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  z-index: 5;
}

.h-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.h-caption {
  position: relative;
  z-index: 10;

  width: 100%;
  margin: auto 0 10vh 0;

  color: #fff;
  font-size: 36px;
  line-height: 120%;
  text-align: center;
  text-shadow: 1px 1px #000;
}

.h-title,
.h-place,
.h-date,
.h-link {
  color: inherit;
  line-height: 1.2;
  margin: 0;
}
.h-place,
.h-date {
  font-size: 20px;
  font-weight: 200;
}
.h-title {
  font-size: 32px;
  margin: 10px 0;
  font-weight: 400;
}
.h-date {
  margin: 0 0 20px;
}
.h-link {
  margin: auto;
}

@media (min-width: 576px) {
  .h-caption {
    text-align: right;
    max-width: 560px;
    margin: auto 2vw 5vh auto;
  }
  .h-link {
    margin: 0 0 0 auto;
  }
}
@media (min-width: 768px) {
  .h-title {
    font-size: 48px;
  }

  .h-place,
  .h-date {
    font-size: 32px;
    font-weight: 300;
  }
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
</style>
