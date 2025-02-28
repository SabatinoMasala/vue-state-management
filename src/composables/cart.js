import {computed, ref, watch} from "vue";

const cart = ref([]);

watch(
    () => cart,
    () => {
        localStorage.setItem('cart', JSON.stringify(cart.value));
    },
    {deep: true}
)

const savedCart = localStorage.getItem('cart');
if (savedCart) {
    cart.value = JSON.parse(savedCart);
}

const removeProduct = (product) => {
    cart.value = cart.value.filter((value) => value.id !== product.id);
}

const clearCart = () => {
    cart.value = [];
}

const incrementProduct = (product) => {
    const foundValue = cart.value.find((value) => value.id === product.id);
    if (foundValue) {
        foundValue.quantity++;
    } else {
        cart.value.push({
            ...product,
            quantity: 1,
        })
    }
    console.log(cart.value);
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
    return cart.value.reduce((total, product) => total + product.price * product.quantity, 0);
})

const taxes = computed(() => {
    return Math.round(subtotal.value * 0.10 * 100) / 100;
})

const total = computed(() => {
    return Math.round((subtotal.value + taxes.value) * 100) / 100;
})

export function useCart() {
    return {
        cart,
        subtotal,
        taxes,
        total,
        clearCart,
        removeProduct,
        incrementProduct,
        decrementProduct,
    }
}