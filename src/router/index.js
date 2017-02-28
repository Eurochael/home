import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import main from '@/page/main'
import intro from '@/page/intro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,  
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: main
    },
    {
      path: '/intro',
      name: 'Hello',
      component: intro
    }    
  ]
})
