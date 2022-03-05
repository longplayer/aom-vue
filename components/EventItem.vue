<template>
  <section :id="eid" :class="'app-event container ev-item ' + eid">
    <article class="ev-article">
      <header class="ev-poster" :style="cssBackgroundColor">
        <base-figure class="ev-fig">
          <template slot="image">
            <a
              class="ev-link"
              rel="noopener noreferer"
              :target="button.target"
              :href="button.href"
              :title="title"
            >
              <base-image
                :src="loadImage"
                :alt="image.alt"
                class="ev-img"
              />
            </a>
          </template>
        </base-figure>
      </header>
      <div class="ev-content">
        <h2 class="app-title">
          {{ title }}
        </h2>
        <p class="app-subtitle">
          <strong>{{ date }}</strong>
        </p>
        <p class="app-paragraph" v-html="desc"></p>
        <base-button :btn="button"></base-button>
      </div>
    </article>
  </section>
</template>

<script>
const DEFAULT_IMAGE = 'https://placehold.it/500x320'

export default {
  props: {
    eid: {
      type: String,
      default: 'event-0',
    },
    title: {
      type: String,
      default: 'The title',
    },
    desc: {
      type: String,
      default: 'The Description...',
    },
    date: {
      type: String,
      default: '9 dec 1900',
    },
    button: {
      type: Object,
      default: () => {},
    },
    image: {
      type: Object,
      default: () => {},
    },
    posterBackgroundColor: {
      type: String,
      default: '#000'
    }
  },
  data() {
    return {
      img: DEFAULT_IMAGE,
    }
  },
  computed: {
    loadImage() {
      return require('@/assets/img/' + this.img)
    },
    cssBackgroundColor() {
      return `background-color:${this.posterBackgroundColor}`
    }
  },
  created() {
    this.img = this.image.path
  },
}
</script>

<style lang="postcss" scoped>
.ev-item {
  @apply container mx-auto;

  .ev-article {
    @apply grid gap-4 grid-cols-5 pt-24;

    .ev-poster {
      @apply col-span-5 md:col-span-3;

      .ev-fig {
        @apply h-full w-full m-0 overflow-hidden;

        .ev-link {
          font-size: 0;
          height: 100%;
          @apply block;
          .ev-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: transform 250ms ease-in-out;
            transform: scale(.8);
          }
          &:hover {
            .ev-img {
              transform: scale(1);
            }
          }
        }
      }
    }
    .ev-content {
      @apply pt-3 text-center md:text-left col-span-5 md:col-span-2;

      p {
        @apply mb-2;
      }

      .app-title {
        white-space: nowrap;
      }

      .btn {
        @apply md:w-full;
      }
    }
  }
}
</style>
