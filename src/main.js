import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'primeicons/primeicons.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import router from './router'

createApp(App)
    .use(router, Toast)
    .mount('#app')
