import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/block/:id',
    name: 'Block:id',
    component: () => import('../views/Block.vue'),
  },
  {
    path: '/transaction/:id',
    name: 'Transaction:id',
    component: () => import('../views/Transaction.vue'),
  },
  {
    path: '/asset/:id',
    name: 'Asset:id',
    component: () => import('../views/Asset.vue'),
  },
  {
    path: '/block',
    name: 'block',
    component: () => import('../views/BlockList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
