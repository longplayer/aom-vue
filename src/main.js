import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Plugins
import VueScrollTo from 'vue-scrollto'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueScrollTo)
Vue.use(VueMasonry)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
