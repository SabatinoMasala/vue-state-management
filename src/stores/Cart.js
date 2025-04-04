import {defineStore} from 'pinia';
import {computed, ref, watch} from "vue";
import {useOrdersStore} from "@/stores/Orders.js";

export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);

    const removeProduct = (product) => {
        cart.value = cart.value.filter((value) => value.id !== product.id);
        useCartStore().toastError(`${product.title} removed from cart`, {
            label: 'Undo',
            onClick: () => {
                restoreLine(product);
            }
        });
    }

    const clearCart = () => {
        cart.value = [];
    }

    const restoreLine = (line) => {
        cart.value.push(line);
    }

    const incrementProduct = (product, amount = 1) => {
        const foundValue = cart.value.find((value) => value.id === product.id);
        if (foundValue) {
            foundValue.quantity += amount;
        } else {
            cart.value.push({
                ...product,
                quantity: amount,
            })
        }
        useCartStore().toastSuccess(`${product.title} added to cart`);
    }

    const decrementProduct = (product) => {
        const foundValue = cart.value.find((value) => value.id === product.id);
        if (foundValue) {
            foundValue.quantity -= 1;
            if (foundValue.quantity <= 0) {
                cart.value = cart.value.filter((value) => value.id !== product.id);
            }
        }
    }

    const subtotal = computed(() => {
        const subtotal = cart.value.reduce((total, product) => total + product.price * product.quantity, 0);
        return Math.round(subtotal * 100) / 100;
    })

    const taxes = computed(() => {
        return Math.round(subtotal.value * 0.10 * 100) / 100;
    })

    const total = computed(() => {
        return Math.round((subtotal.value + taxes.value) * 100) / 100;
    })

    const amountForProduct = (product) => {
        const foundValue = cart.value.find((value) => value.id === product.id);
        return foundValue ? foundValue.quantity : 0;
    }

    const convert = async () => {
        const orderConfirmation = await useOrdersStore().confirmOrder(cart.value);
        clearCart();
        return orderConfirmation;
    }

    const isEmpty = computed(() => {
        return cart.value.length === 0;
    })

    return {
        isEmpty,
        cart,
        subtotal,
        restoreLine,
        taxes,
        total,
        convert,
        amountForProduct,
        clearCart,
        removeProduct,
        incrementProduct,
        decrementProduct,
    }
}, {
    persist: true,
});