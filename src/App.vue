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
import {useCartStore} from "@/stores/Cart.js";
import {onBeforeUnmount} from "vue";
import {toast} from "vue-sonner";

const cartStore = useCartStore();
const unsubscribe = cartStore.$onAction(({name, store, args}) => {
  if (name === 'incrementProduct') {
    toast.success(`${args[0].title} added to cart`);
  } else if (name === 'removeProduct') {
    toast.error(`${args[0].title} removed from cart`, {
      action: {
        label: 'Undo',
        onClick: () => {
          cartStore.restoreLine(args[0]);
        }
      }
    });
  }
})

onBeforeUnmount(() => {
  unsubscribe();
})

const productsStore = useProductsStore();
productsStore.fetchProducts();

</script>