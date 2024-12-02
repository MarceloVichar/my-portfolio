<template>
  <div
    class="flex flex-col-reverse lg:card-side bg-base-300 lg:bg-base-100 lg:hover:bg-base-300 transition duration-500 shadow-xl pb-4 lg:pb-0 rounded-xl"
    :class="inverted ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <img
      :src="imageSrc"
      :alt="title"
      class="w-64 h-auto object-cover mx-auto"
      :class="inverted ? 'lg:rounded-r-xl' : 'lg:rounded-l-xl'"
    >
    <div class="card-body p-4 gap-6">
      <h2 class="card-title block text-center lg:text-left">
        {{ title }}
      </h2>
      <p
        v-for="(item, i) in contents"
        :key="i"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: [String || Array],
    required: true,
  },
  imageSrc: {
    type: String,
    default: '',
  },
  inverted: {
    type: Boolean,
    default: false,
  },
})

const contents = computed(() => {
  return Array.isArray(props.content) ? props.content : [props.content]
})
</script>
