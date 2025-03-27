<template>
  <RouterView />
  <CartOverlay />
</template>
<script setup>
import {useProductsStore} from "@/stores/Products.js";
import CartOverlay from "@/components/CartOverlay.vue";

const productsStore = useProductsStore();
productsStore.fetchProducts();

</script>