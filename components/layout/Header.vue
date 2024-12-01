<template>
  <div
    class="navbar bg-base-100 fixed justify-center transition-all duration-500 z-50"
    :class="isTop ? 'lg:bg-opacity-0 lg:min-h-28' : 'lg:bg-opacity-0 lg:min-h-16 lg:backdrop-blur-md'"
  >
    <div class="w-full xl:w-[1280px]">
      <div class="flex items-center">
        <div class="dropdown">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li
              v-for="item in menuItems"
              :key="item.route"
            >
              <NuxtLink
                :class="{ active: route.path === localePath(item.route) }"
                :to="localePath(item.route)"
              >
                {{ $t(item.label) }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink :to="localePath('/')">
          <img
            src="~/public/brand.png"
            alt="logo"
            class="h-8 w-auto object-contain"
          >
        </NuxtLink>
      </div>

      <div class="w-full flex justify-end gap-4">
        <div class="hidden lg:flex justify-end">
          <ul class="menu menu-horizontal px-1 gap-1">
            <li
              v-for="item in menuItems"
              :key="item.route"
            >
              <NuxtLink
                :class="{ '!text-primary': route.path === localePath(item.route) }"
                :to="localePath(item.route)"
              >
                {{ $t(item.label) }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <LangSwitcher />
      </div>
    </div>
  </div>
</template>

<script setup>
import LangSwitcher from '~/components/shared/LangSwitcher.vue'

const route = useRoute()

const localePath = useLocalePath()

const isTop = ref(true)

const handleScroll = () => {
  isTop.value = window.scrollY < 150
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const menuItems = ref([
  { route: '/', label: 'HOME' },
  { route: '/about', label: 'ABOUT_ME' },
  { route: '/skills', label: 'MY_SKILLS' },
  { route: '/career', label: 'MY_CAREER' },
])
</script>
