<template>
  <div class="flex justify-center items-center space-x-2">
    <Button @click="$emit('decrement')">
      <MinusIcon />
    </Button>
    <span class="text-sm font-medium text-gray-900">
      {{ amount }}
    </span>
    <Button @click="$emit('increment')">
      <PlusIcon />
    </Button>
  </div>
</template>
<script setup>
import {Button} from '@/components/ui/button';
import {MinusIcon, PlusIcon} from "@heroicons/vue/24/outline";
const props = defineProps({
  amount: {
    type: Number,
    default: 0
  }
})
</script>