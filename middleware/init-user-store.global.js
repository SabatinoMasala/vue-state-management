export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();
    if (!userStore.didInit) {
        await userStore.init();
    }
})