import { createRouter, createWebHistory } from 'vue-router'

import Feed from '@/pages/Feed/index.vue'
import Filing from '@/pages/Filing/index.vue'
import Profile from '@/pages/Profile/index.vue'
import Scales from '@/pages/Scales/index.vue'
import timer from '@/secret/timer.vue'
import game from '@/secret/game.vue'
import Settings from '@/pages/Settings/index.vue'
const routes = [
  { path: '/', redirect: '/feed' },
  { path: '/feed', component: Feed },
  { path: '/settings', component: Settings },
  { path: '/profile', component: Profile },
  { path: '/filing', component: Filing },
  { path: '/Scales', component: Scales },
  { path: '/timer', component: timer },
    { path: '/game', component: game },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
