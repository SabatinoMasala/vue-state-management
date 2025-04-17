import {useCartStore} from "@/stores/Cart.js";
import {createPinia, setActivePinia} from "pinia";
import toastPlugin from "@/plugins/toastPlugin.js";
import {createApp} from "vue";

const app = createApp({});
const product = {
    id: 1,
    title: 'Test product',
    price: 10.0
}

describe('Cart store', () => {
    beforeEach(() => {
        const pinia = createPinia();
        app.use(pinia);
        pinia.use(toastPlugin);
        setActivePinia(pinia);
    })
    it('Is empty', () => {
        const store = useCartStore();
        expect(store.cart).toEqual([]);
        expect(store.isEmpty).toEqual(true);
    })
    it('Adds an item to the cart', () => {
        const store = useCartStore();
        store.incrementProduct(product);
        expect(store.cart).toEqual([{
            ...product,
            quantity: 1
        }])
    })
    it('Updates the quantity of existing products', () => {
        const store = useCartStore();
        store.incrementProduct(product, 2);
        expect(store.cart).toEqual([{
            ...product,
            quantity: 2,
        }])
    })
    it('Decrements a product', () => {
        const store = useCartStore();
        store.incrementProduct(product, 2);
        store.decrementProduct(product);
        expect(store.cart).toEqual([{
            ...product,
            quantity: 1
        }])
    })
    it('Removes a product', () => {
        const store = useCartStore();
        store.incrementProduct(product, 2);
        store.removeProduct(product);
        expect(store.isEmpty).toEqual(true);
    })
    it('Calculates a subtotal', () => {
        const store = useCartStore();
        store.incrementProduct(product, 2);
        expect(store.subtotal).toEqual(20);
    })
    it('Calculates taxes', () => {
        const store = useCartStore();
        store.incrementProduct(product, 2);
        expect(store.taxes).toEqual(2);
    })
    it('Calculates total', () => {
        const store = useCartStore();
        store.incrementProduct(product, 2);
        expect(store.total).toEqual(22);
    })
    it('Clears the cart', () => {
        const store = useCartStore();
        store.incrementProduct(product, 2);
        store.clearCart();
        expect(store.isEmpty).toEqual(true);
    })
    it('Calculates the amount for a product', () => {
        const store = useCartStore();
        store.incrementProduct(product, 2);
        expect(store.amountForProduct(product)).toEqual(2);
    })
})