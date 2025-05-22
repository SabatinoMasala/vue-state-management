import {defaults} from "mande";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();
    if (!userStore.didInit) {
        console.log('We are initing the user store');
        await userStore.init();
    }
    if (userStore.authToken) {
        defaults.headers.Authorization = `Bearer ${userStore.authToken}`
    } else {
        delete defaults.headers.Authorization;
    }
})