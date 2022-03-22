<template>
  <section id="app-hero" class="app-hero">
    <div class="h-area">
      <div
        class="h-item"
        :data-hero-img="loadImage"
        :data-hero-thumbnail="loadImage"
      >
        <div class="h-caption container">
          <template v-if="highlight">
            <p v-if="hero.place.length" class="h-place">{{ hero.place }} :</p>
            <p v-if="hero.title.lenght" class="h-title">{{ hero.title }}</p>
            <p v-if="hero.date.str.length" class="h-date">{{ hero.date.str }}</p>
          </template>
          <base-button v-scroll-to="button.href" :btn="button" />
        </div>
        <base-figure class="h-fig">
          <template slot="image">
            <base-image
              class="h-img"
              :src="loadImage"
              :alt="hero.image.alt"
              width="1000px"
              height="1000px"
              data-sal="fade"
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
      defaultLinkTarget: '#section-gridview',
      defaultLinkLabel: 'Voir mes travaux...',
      button: {
        tag: 'a',
        name: 'hero button',
        label: '',
        href: '#',
        class: 'btn btn-glass h-link',
      }
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
    this.button.href = this.showHighlight ? `#${this.highlight.id}` : this.defaultLinkTarget;
    this.button.label = this.showHighlight ? this.highlight.title : this.defaultLinkLabel;
  },
}
</script>

<style lang="postcss">
.app-hero {
  .h-area {
    position: relative;
    height: 100vh;
    overflow: hidden;

    .h-item {
      height: 100%;
      @apply flex flex-wrap;

      .h-caption {
        position: relative;
        z-index: 10;
        width: 100%;
      }

      .h-fig {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0;
        z-index: 5;
        @apply bg-gray-500;

        .h-img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        &::after {
          display: block;
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(0,0,0);
          background: linear-gradient(350deg, rgba(0,0,0,0) 55%, rgba(0,0,0,1) 100%);
        }

      }
    }
  }

  .h-caption {
    color: #fff;
    line-height: 120%;
    text-align: center;
    text-shadow: 1px 1px rgba(0,0,0,.3);
    margin: auto;
    margin-bottom: 10vh;

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
      font-size: 1.25rem;
      font-weight: 200;
    }
    .h-title {
      font-size: 2rem;
      margin: 10px 0;
      font-weight: 400;
    }
    .h-date {
      margin: 0 0 20px;
    }
    .h-link {
      margin: auto;
    }
  }

  @screen xsm {
    .h-caption {
      text-align: right;
      max-width: 560px;
      margin: auto 2vw 5vh auto;

      .h-link {
        margin: 0 0 0 auto;
      }
    }
  }
  @screen md {
    .h-caption {

      .h-title {
        font-size: 3rem;
      }

      .h-place,
      .h-date {
        font-size: 2rem;
        font-weight: 300;
      }
    }
  }
}

</style>
