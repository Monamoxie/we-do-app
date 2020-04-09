import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../../src/router/index'
import Master from '../../src/components/layouts/Master'
import {store} from '../../src/store/index.js'
import VeeValidate from 'vee-validate'

export const AppEventBus = new Vue()

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VeeValidate);

  

const router = new VueRouter({
  routes,
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { 
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
  else if (to.matched.some(record => record.meta.requiresVisitor)) { 
    if (store.getters.loggedIn) {
      next({
        name: 'todo'
      })
    } else {
      next()
    }
  }
  else {
    next() // make sure to always call next()!
  }
})

new Vue({
  render: h => h(Master),
  router,
  store, 
  template: '<Master/>'
}).$mount('#app')



require('./bootstrap');


