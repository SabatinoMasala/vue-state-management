<template>
  <div>
    <div class="py-24 text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900">Thanks!</h1>
      <p class="mx-auto mt-4 max-w-3xl text-base text-gray-500 mb-3">
        Thanks for shopping with us! Your order ID is <strong>{{ id }}</strong>.
      </p>
      <nuxt-link to="/" class="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Go back home
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const id = route.params.orderId;
</script>