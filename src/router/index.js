import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

let routesChildren = []
const matches = require.context('./', false, /\.\/((?!index)\w+\.js)/)
matches.keys().forEach((key) => {
  routesChildren = routesChildren.concat(matches(key).default)
})

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/main.vue'),
    children: routesChildren
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "main" */ '@/views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
