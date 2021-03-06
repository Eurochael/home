import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import inViewportDirective from 'vue-in-viewport-directive'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'


import router from './router'
import {store} from './store'

import App from './BackGroundTemplate/'




Vue.config.productionTip = true

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/img/icon/Close.svg',
  loading: '/static/img/icon/loading_spinner.gif',
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: [ 'scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend' ]
})
Vue.use(VueMaterial)
Vue.directive('in-viewport', inViewportDirective)




new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
