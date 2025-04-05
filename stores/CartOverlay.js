import {defineStore} from 'pinia';

export const useCartOverlayStore = defineStore('cart-overlay', {
    state: () => {
        return {
            visible: false,
        }
    },
    actions: {
        toggle() {
            this.visible = !this.visible;
        },
        open() {
            this.visible = true;
        },
        close() {
            this.visible = false;
        }
    }
});