<template>
  <Navbar />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold">Profile</h1>
    <p class="mt-2 text-sm text-gray-500">Welcome, {{ userStore.user.name }}!</p>
    <div class="mt-3">
      <Button @click="logout">Logout</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Button} from "@/components/ui/button/index.js";
import Navbar from "@/components/Navbar.vue";
import {useUserStore} from "@/stores/User.js";
import {useRouter} from "vue-router";
const router = useRouter();

const userStore = useUserStore();

const logout = async () => {
  await router.push('/');
  userStore.logout();
}

</script>