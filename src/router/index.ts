import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'

const routes = [
  { path: '/', redirect: '/app' },
  { path: '/app', component: App},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
