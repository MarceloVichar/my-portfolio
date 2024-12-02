<template>
  <div class="transition duration-500 lg:hover:bg-base-300 p-4 pb-8 rounded-xl">
    <h2 class="text-lg lg:text-xl font-bold text-center lg:text-left mb-6">
      {{ title }}
    </h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-8">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
