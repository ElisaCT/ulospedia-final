/* eslint-disable no-undef */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/style.css'
//import Vuelidate from 'vuelidate'

//Vue.use(Vuelidate);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')