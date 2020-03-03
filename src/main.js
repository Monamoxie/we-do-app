import Vue from 'vue'
// import App from './App.vue'
import Master from './components/layouts/Master'
import {store} from './store/index.js'

export const AppEventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(Master),
  store,
}).$mount('#app')
