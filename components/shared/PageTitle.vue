<template>
  <h1 class="text-2xl lg:text-3xl text-center border-b-4 border-primary mx-auto w-fit">
    {{ title?.toUpperCase() }}
  </h1>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
