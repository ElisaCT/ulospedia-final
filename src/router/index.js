import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SejarahUlos from '@/views/SejarahUlos.vue'
import GaleriUlosView from '@/views/GaleriUlosView.vue'
import Penenun from '@/views/Penenun.vue'
import GaleriUlos from '@/views/GaleriUlos.vue'
import PenenunGedogan from '@/views/PenenunGedogan.vue'
import PenenunDetail from '@/views/PenenunDetail.vue'
import UlosDetail from '@/views/UlosDetail.vue'
import PenenunDetail from '@/views/PenenunDetail.vue'

import ('preline')

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
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
            name: 'penenun',
            component: Penenun
        },
        {
            path: '/galeri-ulos',
            name: 'galeri-ulos',
            component: GaleriUlos
        },
        {
            path: '/penenun-gedogan',
            name: 'penenun-gedogan',
            component: PenenunGedogan
        }
    ]
})

export default router