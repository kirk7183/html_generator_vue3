import { createRouter, createWebHistory } from 'vue-router'
import SingleBanner from '../views/SingleBanner.vue'

const routes = [
  {
    path: '/',
    name: 'singleBanner',
    component: SingleBanner
  },
  {
    path: '/CompleteWebsite',
    name: 'completeWebsite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CompleteWebsite.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
