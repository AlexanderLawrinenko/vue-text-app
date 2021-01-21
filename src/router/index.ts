import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FirstStep from '../views/FirstStep.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'FirstStep',
    component: FirstStep
  },
  {
    path: '/choose-currency-pair',
    name: 'SecondStep',
    component: () => import('../views/SecondStep.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue')
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
