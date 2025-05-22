<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CartOverlay />
  </div>
</template>
<script setup lang="ts">
const productsStore = useProductsStore();
await productsStore.fetchProducts();
</script>