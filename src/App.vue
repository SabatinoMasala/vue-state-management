<template>
  <Teleport to="#notification-root">
    <Toaster position="top-center" rich-colors />
  </Teleport>
  <RouterView />
  <CartOverlay />
</template>
<script setup>
import {Teleport} from "vue";
import {Toaster} from '@/components/ui/sonner';
import {useProductsStore} from "@/stores/Products.js";
import CartOverlay from "@/components/CartOverlay.vue";

const productsStore = useProductsStore();
productsStore.fetchProducts();

</script>