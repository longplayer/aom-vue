import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Globally register all `Base`-prefixed components
import './components/_globals'

// Plugins
import VueScrollTo from 'vue-scrollto'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueScrollTo)
Vue.use(VueMasonry)

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
