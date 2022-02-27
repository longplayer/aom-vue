import Vue from 'vue'
import Vuex from 'vuex'

// import modules
import appHero from '@/store/modules/hero.js'
import appEvents from '@/store/modules/events.js'
import appWaterfall from '@/store/modules/waterfall.js'
import appContact from '@/store/modules/contact.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appHero,
    appEvents,
    appWaterfall,
    appContact
  }
})
