import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '../views/Portfolio.vue'
import PingPong from '../views/PingPong.vue'
import Project from '../views/Project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/ping-pong',
    name: 'Portfolio',
    component: PingPong
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
