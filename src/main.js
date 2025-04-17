import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';
import router from './router'
import toastPlugin from "@/plugins/toastPlugin.js";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(toastPlugin);
pinia.use(piniaPluginPersistedstate);

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')