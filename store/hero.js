import hero from '@/data/hero.js'
export const state = () => hero

export const getters = {
  appHero: (state) => state,
  getHeroState: (state) => state,
}

export const mutations = {
  UPDATE_BTN_PROP(state, { property, value }) {
    state.button[property] = value
  },
  UPDATE_PROPERTY(state, payload) {
    state[payload.property] = payload.value
  },
}

export const actions = {
  updateButtonProp({ commit }, payload) {
    commit('UPDATE_BTN_PROP', payload)
  },
  updateProperty({ commit }, payload) {
    commit('UPDATE_PROPERTY', payload)
  },
}
