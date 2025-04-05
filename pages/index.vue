<template>
  <div>
    <Navbar
        @cart-clicked="cartOverlayOpen = true" />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
      <ProductGrid :products="productsStore.products" :loading="productsStore.loading" />
    </div>
  </div>
</template>
<script setup>
import {useProductsStore} from "@/stores/Products.js";

const productsStore = useProductsStore();
</script>