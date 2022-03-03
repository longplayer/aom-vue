import Vue from 'vue'

// Import data
import sculpture from './data/art/sculpture'
import artup2019 from './data/events/artup19'

const highlight = artup2019

// FIX: issue on webpack compilation
// doc: https://github.com/webpack/webpack/tree/master/examples/require.context
// src:https://stackoverflow.com/questions/39906807/cant-dynamically-pass-relative-src-path-for-imgs-in-vue-js-webpack
const getSculpture = require.context(
  '@/assets/img/art/sculpture/',
  false,
  /\.jpg$/
)

export const EventBus = new Vue({
  data: {
    appHero: {
      title: 'Affordable Art Fair',
      subTitle: '',
      place: 'Bruxelles',
      date: {
        begin: '15/03/2018',
        end: '18/03/2018',
        str: '15 - 18 mars 2018',
      },
      button: {
        tag: 'a',
        name: 'hero button',
        label: 'Information',
        href: '#',
        class: 'btn btn-white h-link',
      },
      image: {
        path: 'hero/img-02.jpg',
        alt: "It's a robot",
      },
    },
    appWaterfall: {
      title: 'Mes travaux',
      subTitle: 'Selection de mes dernières oeuvres',
      list: [],
    },
    appContact: {
      title: 'Vous pouvez toujours me contacter',
      button: {
        tag: 'a',
        name: 'contact button',
        label: 'Envoyer un email',
        href: 'mailto:a_normal_graffizm@hotmail.com',
        class: 'btn btn-black',
      },
    },
    appFooter: {},
    appEvents: {
      showHighlight: true,
      highlight,
      list: [],
    },
  },
  created() {
    // Prepare images list
    for (const item of sculpture) {
      this.appWaterfall.list.push({
        src: item.file,
        thumbnail: item.file,
        w: item.size[0],
        h: item.size[1],
        alt: item.alt,
        isStatic: false,
      })
    }

    // Hero: define button target
    if (this.appEvents.showHighlight) {
      this.appHero.button.href = `#${this.appEvents.highlight.id}`
    } else {
      this.appHero.button.href = '#app-waterfall'
      this.appHero.button.label = 'Voir la selection'
      this.appHero.title = ''
      this.appHero.place = ''
      this.appHero.date.str = ''
    }
  },
  methods: {
    loadImage(file) {
      return getSculpture('./' + file)
    },
  },
})
