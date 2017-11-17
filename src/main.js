import Vue from 'vue'
import App from './App'
import router from './router'
import bulma from '../node_modules/bulma/css/bulma.css'
import VueFire from 'vuefire'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(bulma)
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
