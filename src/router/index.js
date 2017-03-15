import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import main from '@/page/main'
import intro from '@/page/intro'
import product from '@/page/product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior: () => ({ y: 0 }),  
  routes: [
    {
      path: '/',
      name: '메인',
      component: main
    },
    {
      path: '/intro',
      name: '소개',
      component: intro
    },
    {
      path: '/product',
      name: '제품',
      component: product
    }    
  ]
})
