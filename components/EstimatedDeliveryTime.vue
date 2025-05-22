<template>
  <div class="flex items-center space-x-1">
    <span>Estimated delivery time:</span>
    <Skeleton class="w-[30px] inline-block h-4 rounded-full" v-if="isPending || isFetching" />
    <span v-else class="font-bold">{{ computedTime }}</span>
  </div>
</template>
<script setup lang="ts">
import {Skeleton} from "~/components/ui/skeleton";
import {useDeliveryTime} from "~/composables/useDeliveryTime.js";
const {computedTime, isPending, isFetching} = useDeliveryTime();
</script>