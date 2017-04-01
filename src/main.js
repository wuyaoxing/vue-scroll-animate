import Vue from 'vue'
import App from './App'

import vueScroll from './vue-scroll-animate.js'

Vue.use(vueScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
