<template>
  <div
    class="
        card
        aspect-square
        rounded-2xl
        p-2
        lg:p-4
        bg-white
        relative
        flex
        shadow-lg
        transition
        ease-out
        duration-500
        before:opacity-100
        lg:before:opacity-0
        lg:hover:translate-y-3
        lg:hover:before:opacity-100
        group
        cursor-pointer
      "
  >
    <NuxtImg
      :src="imageSrc"
      :alt="title"
      class="w-full h-full object-cover absolute top-0 left-0 rounded-2xl"
    />
    <div
      class="
        relative
        z-[3]
        text-white
        opacity-100
        lg:opacity-0
        lg:translate-y-4
        transition
        duration-500
        lg:group-hover:opacity-100
        lg:group-hover:translate-y-0
        flex
        flex-col
        justify-end
        h-full
        gap-2
      "
    >
      <h1 class="text-md font-bold">
        {{ title }}
      </h1>
      <p class="text-xs">
        {{ years }} {{ years > 1 ? $t('YEARS') : $t('YEAR') }}
      </p>
      <div class="rating rating-sm">
        <input
          v-for="i in 5"
          :key="`${title}-${i}`"
          type="radio"
          :name="`rating-${title}`"
          class="mask mask-star-2 bg-white"
          disabled
          :checked="rating === i"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 5,
  },
  imageSrc: {
    type: String,
    default: '',
  },
  initialYear: {
    type: Number,
    default: 2021,
  },
})

const years = computed(() => {
  const currentYear = new Date().getFullYear()
  return currentYear - props.initialYear
})
</script>

<style>
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
}
</style>
