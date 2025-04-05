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
productsStore.fetchProducts();
</script>