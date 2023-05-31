<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="grid grid-cols-2">
    <div class="col-span-1">
      <img src="../../assets/images/admin/login-illustration.png" alt="" class="h-screen w-full" />
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
        <div v-if="errorMessage" class="text-danger_main text-sm">
  {{ errorMessage }}
</div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form class="space-y-6" @submit="loginUser">
            <div>
              <label
                for="username-address-icon"
                class="block mb-2 text-base font-medium text-neutral_100"
                >username</label
              >
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" >
                    <path
                      stroke="#404040"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M10 10a4.167 4.167 0 1 0 0-8.333A4.167 4.167 0 0 0 10 10ZM17.158 18.333c0-3.225-3.208-5.833-7.158-5.833s-7.158 2.608-7.158 5.833"
                    />
                  </svg>
                </div>
                <div>
                  <Field
                    v-model="username"
                    type="text"
                    name="username"
                    id="username-address-icon"
                    class="border border-primary_border text-neutral_90 text-base rounded-lg focus:border-primary_pressed block w-full pl-10 p-2.5"
                    placeholder="Masukkan username anda"
                    :rules="validateUsername"
                  />
                  <ErrorMessage name="username" class="text-danger_main text-s" />
                </div>
              </div>

              <label
                for="password-icon"
                class="block mb-2 text-base font-medium text-neutral_100 pt-4"
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
                <Field
                  v-model="password"
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  :rules="validatePassword"
                  class="border border-primary_border text-neutral_90 text-base rounded-lg focus:border-primary_main block w-full pl-10 p-2.5"
                  placeholder="Masukkan password anda"
                />
                <ErrorMessage name="password" class="text-danger_main text-s"/>
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
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
  name: 'admin-login',
  data() {
    return {
      username: '',
      password: '',
      errorMessage:''
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    login: function () {
      this.$v.$touch()
      if (this.$v.$pending || this.$v.$error) return
    },
    async loginUser(values) {
      console.log(this.username)
      console.log(this.password)
      console.log(JSON.stringify(values, null, 2))

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
        else{
          this.errorMessage = "Username or password is incorrect";
        }
        // Handle the response data as needed
      } catch (error) {
        console.error('Error:', error.response.data)
        // Handle the error response
      }
    },
    validateUsername(value) {
      if (!value) {
        return 'Masukkan username anda'
      }
            return true
    },
    validatePassword(value){
      if(!value){
        return 'Masukkan password anda'
      }
      return true;
    }
  },
  setup() {}
}
</script>

<style>
.vee-error-message {
  color: red;
  font-size: 12px;
}
</style>
