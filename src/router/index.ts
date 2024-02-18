// src\router\index.ts
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'home', // 默认子路由
        name: 'home',
        component: () => import('../views/home/home-index.vue'),
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/admin/login',
    name: 'login',
    component: () => import('../views/login/login-index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
