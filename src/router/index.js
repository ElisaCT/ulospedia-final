import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/EndUser/HomeView.vue'
import SejarahUlos from '@/views/EndUser/SejarahUlos.vue'
import Penenun from '@/views/EndUser/Penenun.vue'
import GaleriUlosView from '@/views/EndUser/GaleriUlosView.vue'
import PenenunGedogan from '@/views/EndUser/PenenunGedogan.vue'
import PenenunDetail from '@/views/EndUser/PenenunDetail.vue'
import UlosDetail from '@/views/EndUser/UlosDetail.vue'

// Admin
import AdminLogin from '@/views/Admin/Login.vue'
import Dashboard from '@/views/Admin/Dashboard.vue'
import AdminUlos from '@/views/Admin/Ulos/Ulos.vue'
import AdminPenenun from '@/views/Admin/Penenun/Penenun.vue'

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
            component: GaleriUlosView
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
            path: '/ulos-detail/:id',
            name: 'UlosDetail',
            component: UlosDetail
        },
        {
            path: '/admin/login',
            name: 'admin-login',
            component: AdminLogin
        },
        {
            path: '/admin/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/admin/ulos',
            name: 'AdminUlos',
            component: AdminUlos
        },
        {
            path: '/admin/penenun',
            name: 'AdminPenenun',
            component: AdminPenenun
        }
    ]
})

export default router
