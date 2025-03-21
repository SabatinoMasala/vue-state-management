<template>
  <RouterView />
</template>
<script setup>
import {useProductsStore} from "@/stores/Products.js";

const productsStore = useProductsStore();
productsStore.fetchProducts();
</script>