// src\router\index.ts
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/home/home-index.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/login-index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router