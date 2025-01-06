import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import { configureLayouts } from './layoutConfig'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(configureLayouts(routes)),
})

export default router
