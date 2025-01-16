<template>
  <li class="flex py-6">
    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            {{ orderLine.title }}
          </h3>
          <p class="ml-4">
            {{ subtotal }}
          </p>
        </div>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <div class="flex space-x-2">
          <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500" @click="$emit('decrement')">
            <MinusCircleIcon class="w-5 h-5" />
          </button>
          <p class="text-gray-500 w-5 text-center">
            {{ orderLine.quantity }}
          </p>
          <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500" @click="$emit('increment')">
            <PlusCircleIcon class="w-5 h-5" />
          </button>
        </div>

        <div class="flex">
          <button type="button" class="font-medium text-red-600 hover:text-red-500" @click="$emit('remove')">Remove</button>
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
import {MinusCircleIcon, PlusCircleIcon} from "@heroicons/vue/24/outline";
import {format} from '@/lib/number';
import {computed} from "vue";
const props = defineProps({
  orderLine: {
    type: Object,
    required: true
  }
})

const subtotal = computed(() => {
  return format(props.orderLine.price * props.orderLine.quantity);
})

</script>