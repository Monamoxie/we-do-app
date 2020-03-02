import Vue from 'vue'
import App from './App.vue'
import {store} from './store/index.js'

export const AppEventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
