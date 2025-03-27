import {createRouter, createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import Checkout from './pages/Checkout.vue'
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import {useUserStore} from "@/stores/User.js";
import Profile from "@/pages/Profile.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/checkout', component: Checkout },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
        path: '/profile',
        component: Profile,
        meta: {
            requiresAuth: true,
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {

    const userStore = useUserStore();
    if (!userStore.didInit) {
        await userStore.init();
    }

    if (to.meta.requiresAuth && !userStore.user) {
        next(`/login?redirect=${to.fullPath}`);
    } else {
        next();
    }

})

export default router