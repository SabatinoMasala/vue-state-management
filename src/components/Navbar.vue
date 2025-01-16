<template>
  <nav class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex items-center ml-auto">
          <div class="md:ml-4 md:flex md:shrink-0 md:items-center">
            <button type="button" class="relative flex bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="$emit('cart-clicked')">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View cart</span>
              <ShoppingCartIcon class="size-6" aria-hidden="true" />
              <span class="ml-1 bg-red-500 w-6 h-6 text-sm flex items-center justify-center block rounded-full text-white" v-if="amount > 0">{{ amount }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {ShoppingCartIcon} from '@heroicons/vue/24/outline'
</script>