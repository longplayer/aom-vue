<template>
  <section :id="id" :class="'app-event container ev-item ' + id">
    <article class="row justify-content-center">
      <header class="ev-poster col col-9 col-lg-6">
        <base-figure class="ev-fig">
          <template slot="image">
            <a class="ev-link d-block"
              :target="button.target"
              :href="button.href"
              :title="title"
            >
              <base-image
                :src="loadImage"
                :alt="image.alt"
                class="ev-img"
              ></base-image>
            </a>
          </template>
        </base-figure>
      </header>
      <div class="ev-content col col-12 col-lg-6 pt-3">
        <h2 class="app-title">
          <a :title="title" :href="image.url" target="_blank">{{ title }}</a>
        </h2>
        <p class="app-subtitle">
          <strong>{{ date }}</strong>
        </p>
        <p v-html="desc" class="app-paragraph"></p>
      </div>
      <footer class="ev-footer col col-12">
        <base-button
          :btn="button"
        ></base-button>
      </footer>
    </article>
  </section>
</template>

<script>
export default {
  props: ['id', 'title', 'desc', 'date', 'button', 'image'],
  data () {
    return {
      img: 'https://placehold.it/500x320'
    }
  },
  created () {
    this.img = this.image.path
  },
  computed: {
    loadImage () {
      return require('@/assets/img/' + this.img)
    }
  }
}
</script>
