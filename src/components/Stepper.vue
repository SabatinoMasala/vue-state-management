<template>
  <div class="flex justify-center items-center space-x-2">
    <Button @click="$emit('decrement')">
      <MinusIcon />
    </Button>
    <slot></slot>
    <Button @click="$emit('increment')">
      <PlusIcon />
    </Button>
  </div>
</template>
<script setup>
import {Button} from '@/components/ui/button';
import {MinusIcon, PlusIcon} from "@heroicons/vue/24/outline";
</script>