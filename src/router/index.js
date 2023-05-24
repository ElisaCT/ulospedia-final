import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/EndUser/HomeView.vue'
import SejarahUlos from '@/views/EndUser/SejarahUlos.vue'
import Penenun from '@/views/EndUser/Penenun.vue'
import GaleriUlosView from '@/views/EndUser/GaleriUlosView.vue'
import PenenunGedogan from '@/views/EndUser/PenenunGedogan.vue'
import PenenunATBM from '@/views/EndUser/PenenunATBM.vue'
import PenenunATM from '@/views/EndUser/PenenunATM.vue'
import PenenunDetail from '@/views/EndUser/PenenunDetail.vue'
import UlosDetail from '@/views/EndUser/UlosDetail.vue'

// Admin
import AdminLogin from '@/views/Admin/Login.vue'
import Dashboard from '@/views/Admin/Dashboard.vue'
import AdminUlos from '@/views/Admin/Ulos/Ulos.vue'
import AddUlos from '@/views/Admin/Ulos/AddUlos.vue'
import AdminPenenun from '@/views/Admin/Penenun/Penenun.vue'
import AddPenenun from '@/views/Admin/Penenun/AddPenenun.vue'
import GenerateMotif from '@/views/Admin/GenerateMotif/GenerateMotif.vue'
import MotifUlos from '@/views/Admin/GenerateMotif/MotifUlos.vue'
import MotifUlosHasilGenerate from '@/views/Admin/GenerateMotif/MotifUlosHasilGenerate.vue'

import('preline')

const router = createRouter({
<<<<<<< HEAD
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
      path: '/penenun-atbm',
      name: 'penenun-atbm',
      component: PenenunATBM
    },
    {
      path: '/penenun-atm',
      name: 'penenun-atm',
      component: PenenunATM
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
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/ulos',
      name: 'AdminUlos',
      component: AdminUlos,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/add-ulos',
      name: 'AddUlos',
      component: AddUlos,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/penenun',
      name: 'AdminPenenun',
      component: AdminPenenun,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/add-penenun',
      name: 'AddPenenun',
      component: AddPenenun,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/generate-motif',
      name: 'GenerateMotif',
      component: GenerateMotif,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/generate-motif/motif-ulos',
      name: 'MotifUlos',
      component: MotifUlos,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/generate-motif/motif-ulos/hasil-generate',
      name: 'MotifUlosHasilGenerate',
      component: MotifUlosHasilGenerate,
      meta: { requiresAuth: true }
    }
  ]
=======
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
            component: GaleriUlosView,
            props: true
        },
        {
            path: '/penenun-gedogan',
            name: 'penenun-gedogan',
            component: PenenunGedogan
        },
        {
            path: '/penenun-atbm',
            name: 'penenun-atbm',
            component: PenenunATBM
        },
        {
            path: '/penenun-atm',
            name: 'penenun-atm',
            component: PenenunATM
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
            component: Dashboard,
            meta: { requiresAuth: true }
        },
        {
            path: '/admin/ulos',
            name: 'AdminUlos',
            component: AdminUlos,
            meta: { requiresAuth: true }
        },
        {
            path: '/admin/add-ulos',
            name: 'AddUlos',
            component: AddUlos,
            //meta: { requiresAuth: true }
        },
        {
            path: '/admin/penenun',
            name: 'AdminPenenun',
            component: AdminPenenun,
            meta: { requiresAuth: true }
        },
        {
            path: '/admin/add-penenun',
            name: 'AddPenenun',
            component: AddPenenun,
            //meta: { requiresAuth: true }
        },
        {
            path: '/admin/generate-motif',
            name: 'GenerateMotif',
            component: GenerateMotif,
            meta: { requiresAuth: true }
        },
        {
            path: '/admin/generate-motif/motif-ulos',
            name: 'MotifUlos',
            component: MotifUlos,
            meta: { requiresAuth: true }
        },
        {
            path: '/admin/generate-motif/motif-ulos/hasil-generate',
            name: 'MotifUlosHasilGenerate',
            component: MotifUlosHasilGenerate,
            meta: { requiresAuth: true }
        }
    ]
>>>>>>> 06cd2a397d6210eb005b2f177f550d304a91606d
})

// router.beforeEach((to, from) => {
//   console.log(to)
//   console.log(from)
//   if (to.path === '/admin/dashboard') {
//     router.push('/fnjfnjenek')
//   }
// })

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'))
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  // if (to.name !== 'admin-login' && !isAuthenticated) next({ name: 'admin-login' })
  // if (to.name === 'admin-login' && isAuthenticated) next({ name: 'dashboard' })
  // else next()

<<<<<<< HEAD
  if (requiresAuth && !isAuthenticated) {
    next({ name: 'admin-login' })
  } else {
    next()
  }
})
=======
    if (requiresAuth && !isAuthenticated) {
        next({ name: 'admin-login' })
    } else {
        next()
    }
});


>>>>>>> 06cd2a397d6210eb005b2f177f550d304a91606d

export default router
