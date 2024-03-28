import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { seoMiddleware } from './middlewares/seo'
import { routes } from '@/router/routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

seoMiddleware(router)

export default router
