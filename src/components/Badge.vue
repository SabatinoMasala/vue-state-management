<template>
  <span class="ml-1 bg-red-500 w-6 h-6 text-sm flex items-center justify-center block rounded-full text-white" v-if="amount > 0">
    <slot></slot>
  </span>
</template>