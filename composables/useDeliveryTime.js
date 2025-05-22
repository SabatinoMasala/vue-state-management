import {mande} from "mande";
import {useQuery} from "@tanstack/vue-query";
const deliveryTime = mande('http://vue-state-management-backend.test/api/delivery-time')

export function useDeliveryTime() {

    const {isError, isFetching, isPending, data} = useQuery({
        queryKey: ['delivery-time'],
        queryFn: deliveryTime.get,
        enabled: process.client,
    })

    const computedTime = computed(() => {
        if (isError.value) return 'Error';
        if (data.value) {
            const date = new Date(data.value.timestamp * 1000);
            return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
        }
    })

    return {
        computedTime,
        isError,
        isFetching,
        isPending,
        data,
    }
}