<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="grid grid-cols-2">
    <div class="col-span-1">
      <img src="../../assets/images/admin/login-illustration.png" alt="" />
    </div>

    <div class="form col-span-1">
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto w-20 h-14" src="../../assets/ditenun-logo.png" alt="DiTenun" />
          <h3 class="mt-6 text-center font-medium text-[26px]">Selamat Datang Kembali</h3>
          <p class="mt-2 text-center font-normal text-xl text-neutral_80">
            Masukkan kredensial yang valid untuk login
          </p>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" @submit.prevent="login">
            <div>
              <label
                for="username-address-icon"
                class="block mb-2 text-base font-medium text-neutral_100"
                >username</label
              >
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                    <path
                      stroke="#404040"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M10 10a4.167 4.167 0 1 0 0-8.333A4.167 4.167 0 0 0 10 10ZM17.158 18.333c0-3.225-3.208-5.833-7.158-5.833s-7.158 2.608-7.158 5.833"
                    />
                  </svg>
                </div>
                <input
                  v-model="username"
                  type="text"
                  id="username-address-icon"
                  required
                  class="border border-primary_border text-neutral_70 text-base rounded-lg focus:border-primary_pressed block w-full pl-10 p-2.5"
                  placeholder="Masukkan username anda"
                />
              </div>

              <label for="password-icon" class="block mb-2 text-base font-medium text-neutral_100"
                >Password</label
              >
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                    <path
                      stroke="#404040"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M5 8.333V6.667c0-2.759.833-5 5-5s5 2.241 5 5v1.666M10 15.417a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
                    />
                    <path
                      stroke="#404040"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M14.167 18.333H5.833c-3.333 0-4.166-.833-4.166-4.166V12.5c0-3.333.833-4.167 4.166-4.167h8.334c3.333 0 4.166.834 4.166 4.167v1.667c0 3.333-.833 4.166-4.166 4.166Z"
                    />
                  </svg>
                </div>
                <input
                  v-model="password"
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="border border-primary_border text-neutral_70 text-base rounded-lg focus:border-primary_main block w-full pl-10 p-2.5"
                  placeholder="Masukkan password anda"
                />
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                    <path
                      stroke="#404040"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12.983 10A2.98 2.98 0 0 1 10 12.983 2.98 2.98 0 0 1 7.017 10 2.98 2.98 0 0 1 10 7.017 2.98 2.98 0 0 1 12.983 10Z"
                    />
                    <path
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M10 16.892c2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325-1.909-3-4.65-4.733-7.592-4.733-2.942 0-5.683 1.733-7.592 4.733-.75 1.175-.75 3.15 0 4.325 1.909 3 4.65 4.734 7.592 4.734Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <button
                @click="loginUser"
                type="submit"
                class="flex w-full justify-center rounded-lg bg-primary_main px-4 py-2 text-lg font-medium leading-6 text-neutral_10 hover:bg-primary_hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  name: 'admin-login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async loginUser() {

      console.log(this.username)
      console.log(this.password)

      // const response = await axios.post('http://company.ditenun.com/api/v1/auth/login', {
      //   username: this.username,
      //   password: this.password
      // })

      // console.log(response.data)

      try {
        const response = await axios.post('http://company.ditenun.com/api/v1/auth/login', {
          // Request body data
          username: this.username,
          password: this.password
        })

        console.log(response.data)

        if (response.data.code === 200) {
          localStorage.setItem('authenticated', true)
          localStorage.setItem('token', response.data.data.token)
          this.$router.push('/admin/dashboard')
        }
        // Handle the response data as needed
      } catch (error) {
        console.error('Error:', error.response.data)
        // Handle the error response
      }

      // // Handle successful login, e.g., store token in localStorage or Vuex store
      // console.log('Logged in:', response.data)
      // this.$router.push('/admin/dashboard')

      // Redirect to the home page or perform any other necessary actions
    }
  },
  setup() {
    // const router = useRouter()

    // const login = () => {
    //   localStorage.setItem('authenticated', false)
    //   router.push({ name: 'dashboard' })
    // }

    console.log('TEST')

    // eslint-disable-next-line vue/no-dupe-keys
    // return login
  }
}
</script>
