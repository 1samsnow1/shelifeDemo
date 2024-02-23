import { createApp } from 'vue'
import './assets/global.css'
import axios from 'axios'
import store from './store/store.js'
import App from './App.vue'
import router from './router'
axios.defaults.baseURL ="";
const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
