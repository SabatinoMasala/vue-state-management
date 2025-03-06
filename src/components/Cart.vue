<template>
  <ul role="list" class="-my-6 divide-y divide-gray-200">
    <CartRow
        @remove="cartStore.removeProduct(orderLine)"
        @increment="cartStore.incrementProduct(orderLine)"
        @decrement="cartStore.decrementProduct(orderLine)"
        :order-line="orderLine"
        v-for="orderLine in cartStore.cart"
        :key="orderLine.id" />
  </ul>
</template>
<script setup>
import CartRow from '@/components/CartRow.vue';
import {useCartStore} from "@/stores/Cart.js";
const cartStore = useCartStore();
</script>