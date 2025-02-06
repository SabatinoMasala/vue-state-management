<template>
  <div>
    <Navbar
        @cart-clicked="cartOverlayOpen = true" />
    <CartOverlay
        @increment="incrementProduct"
        @decrement="decrementProduct"
        @remove="removeProduct"
        :cart="cart"
        :open="cartOverlayOpen"
        @close="cartOverlayOpen = false" />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
            :cart="cart"
            @increment="incrementProduct"
            @decrement="decrementProduct"
            :key="product.id"
            v-for="product in products"
            :product="product" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import ProductCard from '@/components/ProductCard.vue';
import {ref} from "vue";
import CartOverlay from "@/components/CartOverlay.vue";

const cartOverlayOpen = ref(false);
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

const products = [{
  id: 1,
  title: 'Pizza',
  description: 'A tasty pizza with tomato sauce, mozzarella cheese, and fresh basil.',
  price: 8.95
}, {
  id: 2,
  title: 'Pasta',
  description: 'A traditional pasta with tomato sauce, mozzarella cheese, and fresh basil.',
  price: 14.95
}, {
  id: 3,
  title: 'Burger',
  description: 'A delicious burger with cheddar cheese, lettuce, tomato, and pickles.',
  price: 12.95
}, {
  id: 4,
  title: 'French fries',
  description: 'Golden brown fries with ketchup.',
  price: 4.95
}, {
  id: 5,
  title: 'Caesar Salad',
  description: 'A classic Caesar salad with romaine lettuce, croutons, and parmesan cheese.',
  price: 9.95
}, {
  id: 6,
  title: 'Sandwich',
  description: 'A fresh sandwich with turkey, lettuce, tomato, and mayo.',
  price: 12.95
}]
</script>