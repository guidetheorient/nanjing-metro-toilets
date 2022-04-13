import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/metro-zdog'
    },
    {
      path: '/metro-zdog',
      component: () => import('./views/metro-zdog/index.vue')
    },
    {
      path: '/metro-zrender',
      component: () => import('./views/metro-zrender/index.vue')
    }
  ]
})
