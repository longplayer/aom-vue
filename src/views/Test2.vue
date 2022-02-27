<template>
  <div>
    <app-figure>
      <template slot="image">
        <app-img :src="image.src" :alt="image.alt"></app-img>
      </template>
      <template slot="caption">
        <figcaption>
          <h1>{{ image.alt}}</h1>
          <p>{{ image.caption}}</p>
        </figcaption>
      </template>
    </app-figure>
  </div>
</template>

<script>
import AppFigure from '@/components/elements/Figure'
import AppImg from '@/components/elements/Img'

export default {
  data () {
    return {
      image: {
        src: 'https://placehold.it/128x128',
        alt: 'Placeholder',
        caption: 'Lorem ipsum...'
      }
    }
  },
  components: {
    AppFigure,
    AppImg
  }
}
</script>
