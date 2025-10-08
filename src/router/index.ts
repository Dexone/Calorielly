import { createRouter, createWebHistory } from 'vue-router'

import Auth from '@/pages/Auth/index.vue'
import Feed from '@/pages/Feed/index.vue'
import game from '@/pages/Other/game.vue'
import timer from '@/pages/Other/timer.vue'
import Profile from '@/pages/Profile/index.vue'
import Scales from '@/pages/Scales/index.vue'
import Settings from '@/pages/Settings/index.vue'
import { useLogin } from '@/store/Login'
const routes = [
  { path: '/', redirect: '/feed' },
  { path: '/feed', component: Feed },
  { path: '/settings', component: Settings },
  {
    path: '/profile',
    component: Profile,
    beforeEnter: () => {
      const loginStore = useLogin()
      if (loginStore.id === 1) return '/auth'
    },
  },
  { path: '/Scales', component: Scales },
  {
    path: '/auth',
    component: Auth,
    meta: { blank: true },
    beforeEnter: () => {
      const loginStore = useLogin()
      if (loginStore.id !== 1) return '/feed'
    },
  }, //blank: true отрисовывает компонент без хедера, меню и тд
  // Other
  { path: '/timer', component: timer, meta: { blank: true } },
  { path: '/game', component: game, meta: { blank: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
