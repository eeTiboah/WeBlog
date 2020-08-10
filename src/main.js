import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import { routes } from './router/index'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VuePaginate)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
