import toastPlugin from '../pinia/toastPlugin.js'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = usePinia();
    pinia.use(toastPlugin);
})