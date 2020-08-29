import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue'
import Categories from './components/categories.vue'
import Products from './components/products.vue'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/products', component: Products },
  { path: '/categories', component: Categories }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
