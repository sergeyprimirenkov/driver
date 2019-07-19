import Vue from 'vue'
import Vuikit from 'vuikit'
import '@vuikit/theme'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import createPersistedState from 'vuex-persistedstate'
import VueFlashMessage from 'vue-flash-message'
import VueCarousel from 'vue-carousel'

require('vue-flash-message/dist/vue-flash-message.min.css')

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuikit)
Vue.use(VueFlashMessage)
Vue.use(VueCarousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
