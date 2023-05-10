import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SejarahUlos from '@/views/SejarahUlos.vue'
import Penenun from '@/views/Penenun.vue'
import GaleriUlos from '@/views/GaleriUlos.vue'
import PenenunGedogan from '@/views/PenenunGedogan.vue'
import PenenunDetail from '@/views/PenenunDetail.vue'
import AdminLogin from '@/views/Admin/Login.vue'

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
        },
        {
            path: '/penenun-gedogan/:id',
            name: 'PenenunDetail',
            component: PenenunDetail
        },
        {
            path: '/admin/login',
            name: 'admin-login',
            component: AdminLogin
        }
    ]
})

export default router