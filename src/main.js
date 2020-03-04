import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import LandingPage from './components/marketing/LandingPage'
import Master from './components/layouts/Master'
import {store} from './store/index.js'

export const AppEventBus = new Vue()

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/',  component: LandingPage },
  {path: '/todo',  component: App }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(Master),
  router,
  store, 
  template: '<Master/>'
}).$mount('#app')
