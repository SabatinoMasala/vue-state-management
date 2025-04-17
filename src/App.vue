<template>
  <Teleport to="#notification-root">
    <Toaster position="top-center" rich-colors />
  </Teleport>
  <RouterView />
  <CartOverlay />
</template>
<script setup>
import {onBeforeUnmount, Teleport} from "vue";
import {Toaster} from '@/components/ui/sonner';
import {useProductsStore} from "@/stores/Products.js";
import CartOverlay from "@/components/CartOverlay.vue";
import {useCartStore} from "@/stores/Cart.js";

onBeforeUnmount(() => {
  unsubscribe();
})

const productsStore = useProductsStore();
productsStore.fetchProducts();

</script>