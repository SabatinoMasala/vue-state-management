<template>
  <Navbar />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-12">
      <div class="col-span-4">
        <h1 class="text-3xl font-bold">Profile</h1>
        <p class="mt-2 text-sm text-gray-500">Welcome, {{ userStore.user.name }}!</p>
        <div class="mt-3">
          <Button @click="logout">Logout</Button>
        </div>
      </div>
      <div class="col-span-8 flex flex-col space-y-3">
        <OrderCard :order="order" v-for="order in ordersStore.orders" />
      </div>
    </div>
  </div>
</template>
<script setup>
import {Button} from "@/components/ui/button/index.js";
import Navbar from "@/components/Navbar.vue";
import {useUserStore} from "@/stores/User.js";
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import {useOrdersStore} from "@/stores/Orders.js";
import OrderCard from "@/components/OrderCard.vue";

const router = useRouter();

const userStore = useUserStore();
const ordersStore = useOrdersStore();

onMounted(() => {
  ordersStore.fetchOrders();
});

const logout = async () => {
  router.push('/');
  userStore.logout();
}

</script>