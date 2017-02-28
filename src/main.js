import Vue from 'vue'
import router from './router'

import App from './BackGroundTemplate/'

Vue.config.productionTip = true

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
