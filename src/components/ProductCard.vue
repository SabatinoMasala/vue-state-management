<template>
  <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200" :class="[amount > 0 ? 'bg-amber-100' : 'bg-white']">
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
      <div class="flex justify-center items-center space-x-2">
        <Button @click="$emit('decrement', product)">
          <MinusIcon />
        </Button>
        <span class="text-sm font-medium text-gray-900">
          {{ amount }}
        </span>
        <Button @click="$emit('increment', product)">
          <PlusIcon />
        </Button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {MinusIcon, PlusIcon} from '@heroicons/vue/24/outline'
import {Button} from '@/components/ui/button';
import {computed} from "vue";
import { format } from '@/lib/number';

const props = defineProps({
  cart: {
    type: Array,
    required: true
  },
  product: {
    type: Object,
    required: true
  }
})

const formattedPrice = computed(() => {
  return format(props.product.price);
})

const amount = computed(() => {
  const item = props.cart.find((item) => item.id === props.product.id);
  return item ? item.quantity : 0;
})

</script>