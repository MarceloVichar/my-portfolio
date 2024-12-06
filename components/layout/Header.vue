<template>
  <div
    class="navbar bg-base-100 fixed justify-center transition-all duration-500 z-10 lg:bg-opacity-50 lg:backdrop-blur-md"
    :class="isTop ? 'lg:min-h-28' : 'lg:min-h-16'"
  >
    <div class="w-full xl:w-[1280px] flex">
      <div
        class="btn btn-ghost lg:hidden"
        @click="menuIsOpen = true"
      >
        <Icon
          name="radix-icons:hamburger-menu"
          class="text-3xl"
        />
      </div>

      <transition name="fade-slide">
        <MobileMenu
          v-if="menuIsOpen"
          :items="menuItems"
          @close="menuIsOpen = false"
        />
      </transition>
      <NuxtLink
        :to="localePath('/')"
        class="flex-none"
      >
        <h2 class="font-montserrat sm:text-2xl text-accent">
          MARCELO VICHAR
        </h2>
      </NuxtLink>

      <div class="grow flex justify-end gap-4">
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
        <ThemePicker />
      </div>
    </div>
  </div>
</template>

<script setup>
import LangSwitcher from '~/components/shared/LangSwitcher.vue'
import MobileMenu from '~/components/layout/MobileMenu.vue'
import ThemePicker from '~/components/shared/ThemePicker.vue'

const route = useRoute()

const localePath = useLocalePath()

const isTop = ref(true)
const menuIsOpen = ref(false)

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
  { route: '/projects', label: 'PROJECTS' },
])
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s ease;
}

.fade-slide-enter-from {
  transform: translateX(-100%);
}

.fade-slide-enter-to {
  transform: translateX(0);
}

.fade-slide-leave-from {
  transform: translateX(0);
}

.fade-slide-leave-to {
  transform: translateX(-100%);
}
</style>
