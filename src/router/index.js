import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '../views/Portfolio.vue'
import PingPong from '../views/PingPong.vue'
import Project from '../views/Project.vue'
import About2 from '../views/About2.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/about2',
    name: 'About2',
    component: About2
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
