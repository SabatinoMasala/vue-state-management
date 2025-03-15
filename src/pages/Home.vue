<template>
  <div>
    <Navbar
        @cart-clicked="cartOverlayOpen = true" />
    <CartOverlay
        :open="cartOverlayOpen"
        @close="cartOverlayOpen = false" />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
      <ProductGrid :products="productsStore.products" :loading="productsStore.loading" />
    </div>
  </div>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import {ref} from "vue";
import CartOverlay from "@/components/CartOverlay.vue";
import {useProductsStore} from "@/stores/Products.js";
import ProductGrid from "@/components/ProductGrid.vue";

const productsStore = useProductsStore();

const cartOverlayOpen = ref(false);
</script>