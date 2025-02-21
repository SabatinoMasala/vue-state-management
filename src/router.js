import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Checkout from './pages/Checkout.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/checkout', component: Checkout },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router