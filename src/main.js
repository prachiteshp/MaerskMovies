import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import {
  faSearch,
  faRedoAlt,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import VueRouter from 'vue-router'
import { routes } from './router/routes'
import App from './App.vue'
import UrlBuilder from './plugins/urlBuilder'
import Constant from './plugins/constant'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(
  faSearch,
  faRedoAlt,
  faStar
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const router = new VueRouter({ routes })
Vue.use(UrlBuilder)
Vue.use(Constant)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
