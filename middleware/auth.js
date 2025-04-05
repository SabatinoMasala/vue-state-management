export default defineNuxtRouteMiddleware((to, from) => {
    if (!useUserStore().user) {
        return navigateTo(`/login?redirect=${to.fullPath}`);
    }
})