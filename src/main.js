import { createApp } from 'vue'
import './assets/global.css'
import axios from 'axios'
import store from './store/store.js'
import App from './App.vue'
import router from './router'
import { getCookie } from './assets/cooki.js'
axios.defaults.baseURL ="https://api.shelife.gorgon.ir/v1";

if(getCookie("token")){
axios.defaults.headers.common["token"] = getCookie("token");
}
const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
