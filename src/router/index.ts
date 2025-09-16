import { createRouter, createWebHistory } from 'vue-router'

import Feed from '@/pages/Feed/index.vue'
import Filing from '@/pages/Filing/index.vue'
import Profile from '@/pages/Profile/index.vue'
import Scales from '@/pages/Scales/index.vue'
import secret from '@/pages/secret.vue'
import Settings from '@/pages/Settings/index.vue'

const routes = [
  { path: '/', redirect: '/feed' },
  { path: '/feed', component: Feed },
  { path: '/settings', component: Settings },
  { path: '/profile', component: Profile },
  { path: '/filing', component: Filing },
  { path: '/Scales', component: Scales },
  { path: '/secret', component: secret },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
