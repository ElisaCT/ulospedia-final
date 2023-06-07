<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    data-drawer-target="separator-sidebar"
    data-drawer-toggle="separator-sidebar"
    aria-controls="separator-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="sidebar"
    class="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-6 py-6 overflow-y-auto bg-neutral_10 shadow-md">
      <a href="/admin/dashboard/" class="flex items-center pl-2.5 mb-5">
        <img src="../../assets/ditenun-logo.png" class="h-6 mr-3 sm:h-7" alt="DiTenun Logo" />
        <span id="ulospedia-logo" class="self-center text-lg font-normal whitespace-nowrap text-primary_main"
          >Ulospedia DiTenun</span
        >
      </a>
      <ul class="space-y-2 font-medium">
        <span class="text-base font-normal text-neutral_80 tracking-widest">Menu</span>
        <li>
          <router-link
            to="/admin/dashboard"
            class="flex items-center p-3 text-primary_pressed font-normal text-lg transition duration-75 rounded-lg hover:bg-primary_surface"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path
                stroke="#192A5A"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
              />
            </svg>
            <span id="sidebar-dashboard" class="ml-3">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/admin/ulos"
            class="flex items-center p-3 text-primary_pressed font-normal text-lg transition duration-75 rounded-lg hover:bg-primary_surface"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path
                stroke="#192A5A"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42"
              />
              <path
                stroke="#192A5A"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15ZM8 7h8M8 10.5h5"
              />
            </svg>
            <span id="sidebar-ulos" class="flex-1 ml-3 whitespace-nowrap">Ulos</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/admin/penenun"
            class="flex items-center p-3 text-primary_pressed font-normal text-lg transition duration-75 rounded-lg hover:bg-primary_surface"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path
                stroke="#192A5A"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M18 7.16a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58A2.589 2.589 0 0 1 18 7.16ZM16.97 14.44c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.97 7.16c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.58C8.64 3.15 7.49 2 6.06 2a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58ZM7 14.44c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71M12 14.63a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58ZM9.09 17.78c-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0 1.41-.94 1.41-2.48 0-3.42-1.59-1.06-4.22-1.06-5.82 0Z"
              />
            </svg>
            <span id="sidebar-penenun" class="flex-1 ml-3 whitespace-nowrap">Penenun</span>
          </router-link>
        </li>
      </ul>

      <ul class="pt-4 mt-4 space-y-2 font-medium">
        <span class="text-base font-normal text-neutral_80 tracking-widest">Others</span>
        <li>
          <router-link
            to="/admin/generate-motif"
            class="flex items-center p-3 text-primary_pressed font-normal text-lg transition duration-75 rounded-lg hover:bg-primary_surface"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path
                stroke="#192A5A"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M16.97 12.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-4.5C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25Z"
              />
              <path
                stroke="#192A5A"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21.97 7.5c0 2.87-2.19 5.22-5 5.47v-.72c0-3.75-1.5-5.25-5.25-5.25H11c.25-2.81 2.6-5 5.47-5 2.79 0 5.09 2.07 5.44 4.77.04.23.06.48.06.73Z"
              />
            </svg>
            <span id="sidebar-generate-motif" class="ml-4">Generate Motif</span>
          </router-link>
        </li>
      </ul>

      <!--Logout-->
      <div class="relative pt-44">
        <div
          class="flex flex-col items-center p-3 text-primary_pressed font-normal text-lg transition duration-75 rounded-lg gap-3"
        >
          <div id="hs-mega-menu-basic-dr" type="button" class="flex items-center w-full">
            <div class="mr-16">
              <div><span id="text-username">{{ username }}</span></div>
              <div class="font font-light text-sm pt-0"><span>admin</span></div>
            </div>
          </div>
          <button
            id="btn-logout"
            @click="logout"
            type="button"
            class="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold border-2 text-primary_main hover:text-neutral_10 hover:bg-primary_main hover:border-blue-500 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
          >
            Logout

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      username: ''
    }
  },
  methods: {
    logout() {
      console.log('TEST LOGOUT')
      localStorage.removeItem('authenticated')
      localStorage.removeItem('token')
      this.$router.push('/admin/login')
    }
  },
  mounted() {
    const token = localStorage.getItem('token')
    axios
      .get('http://company.ditenun.com/api/v1/admin/current', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response)
        this.username = response.data.data.currentAdminUsername
      })
  }
}
</script>

<style scoped>
a.router-link-exact-active {
  background: #d6ddf0;
  color: #3355b5;
}
a.router-link-exact-active svg path {
  stroke: #3355b5;
}
</style>
