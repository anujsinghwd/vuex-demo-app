import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Notifications from 'vue-notification'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Notifications)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
