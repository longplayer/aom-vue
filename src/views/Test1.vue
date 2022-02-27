<template>
  <div>
    <ul v-for="(image, index) in list" :key="index">
      <li>
        <figure>
          <img width="400" :src="loadImage(image.src)">
          <figcaption>
            source: {{ loadImage(image.src) }}
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
// FIX: issue on webpack compilation
// doc: https://github.com/webpack/webpack/tree/master/examples/require.context
// src:https://stackoverflow.com/questions/39906807/cant-dynamically-pass-relative-src-path-for-imgs-in-vue-js-webpack

let getImage = require.context('@/assets/img/art/sculpture/', false, /\.jpg$/)

export default {
  data () {
    return {
      list: [],
      db: [
        {
          title: '',
          file: 'DSC_8147.jpg',
          alt: '',
          size: [
            1200,
            1793
          ]
        },
        {
          title: '',
          file: 'Robot17.jpg',
          alt: '',
          size: [
            1000,
            750
          ]
        },
        {
          title: '',
          file: 'petit-robot.jpg',
          alt: '',
          size: [
            752,
            1333
          ]
        }
      ]
    }
  },
  mounted () {
    this.refactorList(this.db)
  },
  methods: {
    refactorList (database) {
      for (let item of database) {
        this.list.push({
          src: item.file,
          thumbnail: item.file,
          w: item.size[0],
          h: item.size[1],
          alt: item.alt
        })
      }
    },
    loadImage (file) {
      return getImage('./' + file)
    }
  }
}
</script>
