<template>
  <ul role="list" class="-my-6 divide-y divide-gray-200">
    <CartRow
        @remove="removeProduct(orderLine)"
        @increment="incrementProduct(orderLine)"
        @decrement="decrementProduct(orderLine)"
        :order-line="orderLine"
        v-for="orderLine in cart"
        :key="orderLine.id" />
  </ul>
</template>
<script setup>
import CartRow from '@/components/CartRow.vue';
import {useCart} from "@/composables/cart.js";

const {cart, incrementProduct, decrementProduct, removeProduct} = useCart();
</script>