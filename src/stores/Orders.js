import {defineStore} from "pinia";
import {mande} from "mande";
const orders = mande('http://vue-state-management-backend.test/api/orders');

export const useOrdersStore = defineStore('orders', {
    state: () => {
        return {
            orders: [],
        }
    },
    actions: {
        async fetchOrders() {
            const response = await orders.get();
            this.orders = response.data;
        },
        confirmOrder(cart) {
            return orders.post({
                cart: cart.map(item => {
                    return {
                        id: item.id,
                        quantity: item.quantity,
                    }
                })
            })
        }
    }
})