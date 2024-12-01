<template>
  <div class="fixed top-0 left-0 h-screen w-screen bg-base-200 flex flex-col justify-center items-center z-50">
    <button
      class="absolute top-4 right-4 btn btn-circle"
      @click="emit('close')"
    >
      <Icon
        name="zondicons:close-solid"
        class="text-4xl"
      />
    </button>

    <ul
      class="flex flex-col gap-4 items-center p-4 overflow-y-auto text-xl"
    >
      <li
        v-for="item in items"
        :key="item.route"
      >
        <NuxtLink
          :class="{ 'text-primary': route.path === localePath(item.route) }"
          :to="localePath(item.route)"
          @click="emit('close')"
        >
          {{ $t(item.label) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['close'])

const route = useRoute()
const localePath = useLocalePath()

onMounted(() => {
  document.body.classList.add('h-screen', 'overflow-y-hidden')
})

onUnmounted(() => {
  document.body.classList.remove('h-screen', 'overflow-y-hidden')
})
</script>
