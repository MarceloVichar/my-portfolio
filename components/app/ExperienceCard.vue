<template>
  <div
    class="flex flex-col bg-base-300 lg:bg-base-100 lg:hover:bg-base-300 transition duration-500 shadow-xl rounded-xl p-4 gap-4"
  >
    <div class="flex gap-4">
      <NuxtImg
        format="webp"
        :src="imageSrc"
        :alt="title"
        class="flex-none w-16 h-16 object-cover rounded-xl"
      />
      <div class="grow flex flex-col gap-2 lg:gap-4">
        <h2 class="text-md md:text-lg font-bold block">
          {{ title }}
        </h2>

        <h3 class="text-sm">
          {{ institution }}
        </h3>
      </div>
    </div>
    <div class="grow flex flex-col gap-2">
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
    type: [String, Array],
    required: true,
  },
  imageSrc: {
    type: String,
    default: '',
  },
  institution: {
    type: String,
    default: '',
  },
})

const contents = computed(() => {
  return Array.isArray(props.content) ? props.content : [props.content]
})
</script>
