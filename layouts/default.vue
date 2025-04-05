<template>
  <slot></slot>
  <Teleport to="#teleports">
    <Toaster position="top-center" rich-colors />
  </Teleport>
</template>
<script setup lang="ts">
import {Toaster} from "vue-sonner";
</script>