<template>
  <RouterView />
</template>
<script setup>
import {useProductsStore} from "@/stores/Products.js";
import {useUserStore} from "@/stores/User.js";

const productsStore = useProductsStore();
productsStore.fetchProducts();

const userStore = useUserStore();
userStore.init();
</script>