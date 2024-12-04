<template>
  <h2 class="text-center text-sm lg:w-1/2 mx-auto">
    {{ text }}
  </h2>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
