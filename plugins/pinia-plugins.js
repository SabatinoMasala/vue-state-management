import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import toastPlugin from '../pinia/toastPlugin.js'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = usePinia();
    pinia.use(piniaPluginPersistedstate);
    pinia.use(toastPlugin);
})