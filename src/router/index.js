import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login'),
    meta: {
      keepAlive: false
    }
  },
  {
    name: 'index',
    path: '/',
    component: () => import('../views/index'),
    meta: {
      keepAlive: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
