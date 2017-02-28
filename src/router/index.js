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
      name: 'Main',
      component: main
    },
    {
      path: '/intro',
      name: 'introduce',
      component: intro
    }    
  ]
})
