import {defineStore} from 'pinia';
import {mande} from 'mande';
import {useCartStore} from "@/stores/Cart.js";

const products = mande('http://vue-state-management-backend.test/api/products');

export const useProductsStore = defineStore('products', {
    persist: {
        enabled: true,
        pick: ['products', 'canSyncInBackground', 'updatedAt']
    },
    state: () => ({
        updatedAt: null,
        canSyncInBackground: false,
        products: [],
        loading: false,
        didLoad: false,
    }),
    getters: {
        upsellingProducts() {
            const cartStore = useCartStore();
            return this.products
                .filter(product => product.use_for_upselling)
                .filter(product => cartStore.amountForProduct(product) === 0);
        }
    },
    actions: {
        async fetchProducts(force = false) {
            if (this.didLoad && !force) {
                return;
            }
            let data = [];
            const deltaInMs = Date.now() - this.updatedAt;
            const deltaInSeconds = Math.round(deltaInMs / 1000);
            if (!this.canSyncInBackground || deltaInSeconds > 60 * 60) {
                this.loading = true;
            }
            try {
                const response = await products.get();
                data = response.data;
                this.$patch({
                    updatedAt: Date.now(),
                    canSyncInBackground: true,
                    products: data,
                    loading: false,
                    didLoad: true,
                })
            } catch (e) {
                console.error(e);
                this.$patch({
                    didLoad: true,
                    loading: false,
                })
            }
        }
    }
})