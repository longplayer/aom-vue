import hero from '@/data/hero/hero.js'

export default {
  state: hero,
  getters: {
    appHero: state => state
  },
  mutations: {
    'UPDATE_BTN_PROP' (state, payload) {
      state.button[payload.property] = payload.value
    },
    'UPDATE_PROPERTY' (state, payload) {
      state[payload.property] = payload.value
    }
  },
  actions: {
    updateButtonProp ({ commit }, payload) {
      commit('UPDATE_BTN_PROP', payload)
    },
    updateProperty ({ commit }, payload) {
      commit('UPDATE_PROPERTY', payload)
    }
  }
}
