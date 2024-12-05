<template>
  <label class="swap swap-rotate">
    <input
      id="theme-picker-input"
      type="checkbox"
      @click="isDark ? colorMode.preference = 'light' : colorMode.preference = 'dark'"
    >
    <Icon
      name="noto-v1:crescent-moon"
      class="swap-on fill-current h-6 w-6"
    />
    <Icon
      name="noto-v1:sun"
      class="swap-off fill-current h-6 w-6"
    />
  </label>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed(() => colorMode.preference === 'dark')

onMounted(() => {
  const input = document.getElementById('theme-picker-input')
  if (isDark.value) {
    input.checked = true
  }
})
</script>
