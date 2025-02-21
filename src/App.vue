<template>
  <RouterView />
</template>
<script setup>
import {provide, ref} from "vue";

const cart = ref([]);

const removeProduct = (product) => {
  cart.value = cart.value.filter((value) => value.id !== product.id);
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

provide('cart', {
  cart,
  removeProduct,
  incrementProduct,
  decrementProduct,
})
</script>