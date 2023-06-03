/* eslint-disable no-undef */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import './stores/validator'

//import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
//import {ValidationObserver} from 'vee-validate'

// Vue.component('ValidationProvider', ValidationProvider);
// Vue.component('ValidationObserver', ValidationObserver);
//import Vuelidate from 'vuelidate'

//Vue.use(Vuelidate);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')