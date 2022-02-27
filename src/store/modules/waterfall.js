import sculptures from '@/data/art/sculpture.js'
const getFile = require.context('@/assets/img/art/sculpture/', false, /\.jpg$/)

export default {
  state: {
    title: 'Mes travaux',
    subTitle: 'Selection de mes dernières oeuvres',
    list: []
  },
  getters: {
    appWaterfall: (state) => state
  },
  mutations: {
    'INIT_ARTWORKS' (state, list) {
      for (const item of list) {
        state.list.push({
          src: item.file,
          thumbnail: item.file,
          w: item.size[0],
          h: item.size[1],
          alt: item.alt,
          isStatic: false
        })
      }
    },
    'UPDATE_IMG_PATH' (state) {
      for (const item of state.list) {
        if (!item.isStatic) {
          item.src = getFile('./' + item.src)
          item.thumbnail = getFile('./' + item.thumbnail)
          item.isStatic = true
        }
      }
    }
  },
  actions: {
    initArtworks: ({ commit }) => {
      commit('INIT_ARTWORKS', sculptures)
    },
    updatePath: ({ commit }, payload) => {
      commit('UPDATE_IMG_PATH', payload)
    }
  }
}
