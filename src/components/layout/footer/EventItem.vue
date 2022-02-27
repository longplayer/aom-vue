<template>
  <section :id="id" :class="'app-event container ev-item ' + id">
    <article class="row">
      <header class="ev-poster col col-12 col-md-6">
        <app-figure class="ev-fig">
          <template slot="image">
            <a class="ev-link d-block"
              :target="button.target"
              :href="button.href"
              :title="title"
            >
              <app-img
                :src="loadImage"
                :alt="image.alt"
                class="ev-img"
              ></app-img>
            </a>
          </template>
        </app-figure>
      </header>
      <div class="ev-content col col-12 col-md-6">
        <p class="app-subtitle">
          <strong>{{ date }}</strong>
        </p>
        <p class="app-title">
          <strong><a :title="title" :href="image.url" target="_blank">{{ title }}</a> :</strong>
        </p>
        <p v-html="desc" class="app-paragraph"></p>
        <app-btn
          :btn="button"
        ></app-btn>
      </div>
    </article>
  </section>
</template>

<script>
import AppBtn from '@/components/elements/Button'
import AppFigure from '@/components/elements/Figure'
import AppImg from '@/components/elements/Img'

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
  },
  components: {
    AppBtn,
    AppFigure,
    AppImg
  }
}
</script>

