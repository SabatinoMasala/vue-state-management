<template>
  <div>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" v-if="!loading">
      <ProductCard
          :key="product.id"
          v-for="product in products"
          :product="product" />
    </div>
    <div class="flex items-center justify-center py-6" v-else>
      <ArrowPathIcon class="size-6 animate-spin" />
    </div>
  </div>
</template>
<script setup>
import {ArrowPathIcon} from "@heroicons/vue/16/solid";
import ProductCard from "@/components/ProductCard.vue";
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true
  }
})
</script>