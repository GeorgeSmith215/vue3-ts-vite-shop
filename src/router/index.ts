import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRouter from './modules/product'
import settingRouter from './modules/setting'
import systemRouter from './modules/system'
import nprogress from 'nprogress' // @types/nprogress
import 'nprogress/nprogress.css'

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
        component: () => import('../views/home/index.vue'),
        meta: { title: '首页' }
      },
      productRouter,
      settingRouter,
      systemRouter
    ]
  },
  {
    path: '/admin/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})

router.beforeEach((to, from) => {
  nprogress.start() // 开始加载进度条
})

router.afterEach(() => {
  nprogress.done() // 加载进度条
})

export default router
