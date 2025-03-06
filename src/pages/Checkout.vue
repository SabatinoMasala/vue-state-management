<template>
  <div>
    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between mb-3">
        <RouterLink to="/" class="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Go back home
        </RouterLink>
      </div>
      <h2 class="sr-only">Checkout</h2>

      <div class="mt-10 lg:mt-0">
        <h2 class="text-lg font-medium text-gray-900">Order summary</h2>

        <div class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
          <h3 class="sr-only">Items in your cart</h3>
          <div class="divide-y divide-gray-200 px-4 py-6 sm:px-6">
            <Cart />
          </div>
          <dl class="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
            <div class="flex items-center justify-between">
              <dt class="text-sm">Subtotal</dt>
              <dd class="text-sm font-medium text-gray-900">{{ format(cartStore.subtotal) }}</dd>
            </div>
            <div class="flex items-center justify-between">
              <dt class="text-sm">Taxes</dt>
              <dd class="text-sm font-medium text-gray-900">{{ format(cartStore.taxes) }}</dd>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 pt-6">
              <dt class="text-base font-medium">Total</dt>
              <dd class="text-base font-medium text-gray-900">{{ format(cartStore.total) }}</dd>
            </div>
          </dl>

          <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
            <button @click="confirmOrder" class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Confirm order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Cart from '@/components/Cart.vue';
import {format} from '@/lib/number.js';
import {useRouter} from 'vue-router';
import {useCartStore} from "@/stores/Cart.js";
const cartStore = useCartStore();

const router = useRouter();

const confirmOrder = () => {
  alert('Thanks for ordering!');
  cartStore.clearCart();
  router.push('/');
}

</script>