<template>
  <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
    <div class="flex flex-1 flex-col space-y-2 p-4">
      <h3 class="text-sm font-medium text-gray-900">
        {{ product.title }}
      </h3>
      <p class="text-sm text-gray-500">
        {{ product.description }}
      </p>
      <div class="flex flex-1 flex-col justify-end">
        <p class="text-base font-medium text-gray-900">
          {{ formattedPrice }}
        </p>
      </div>
      <Stepper
          @increment="$emit('increment', product)"
          @decrement="$emit('decrement', product)"
      />
    </div>
  </div>
</template>
<script setup>
import {computed} from "vue";
import {format} from '@/lib/number';
import Stepper from "@/components/Stepper.vue";

const props = defineProps({
  cart: {
    type: array,
    required: true,
  },
  product: {
    type: Object,
    required: true
  }
})

const formattedPrice = computed(() => {
  return format(props.product.price);
})

</script>