import {toast} from "vue-sonner";

export default function(context) {
    context.store.$toast = (message, data = {}) => {
        toast(message, {
            ...data,
            duration: 3000,
            classes: {
                title: 'text-lg',
            }

        });
    }
    context.store.toastSuccess = (message) => {
        context.store.$toast(message, {
            type: 'success'
        });
    }
    context.store.toastError = (message, action = {})=> {
        context.store.$toast(message, {
            type: 'error',
            action,
        });
    }
}