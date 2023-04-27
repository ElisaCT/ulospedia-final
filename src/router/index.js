import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SejarahUlos from '@/views/SejarahUlos.vue'
import Penenun from '@/views/Penenun.vue'
import PenenunGedogan from '@/views/PenenunGedogan.vue'
import('preline')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sejarah-ulos',
      name: 'sejarah-ulos',
      component: SejarahUlos
    },
    {
      path: '/penenun',
      name: 'Penenun',
      component: Penenun
    },
    {
      path: '/penenun-gedogan',
      name: 'penenun-godagan',
      component: PenenunGedogan
    }
  ]
})

export default router
