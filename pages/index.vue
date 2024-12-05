<template>
  <div class="h-full flex flex-col gap-4">
    <section
      id="hero"
      class="grid grid-cols-1 lg:grid-cols-2 w-auto gap-16"
      style="min-height: calc(100vh - 112px)"
    >
      <div class="h-full w-full flex flex-col justify-center gap-6 items-center lg:items-start">
        <p>{{ $t('HELLO') }}  &#128075;, {{ $t('MY_NAME_IS') }}</p>
        <Typing
          :text="$t('SOFTWARE_ENGINEER')"
          class="px-4 lg:px-0 text-6xl h-32 xl:h-auto w-full text-center lg:text-left"
        />
        <ShowCvButton />
      </div>
      <div class="flex justify-center items-center">
        <div class="h-72 w-72 overflow-hidden rounded-full">
          <NuxtImg
            format="webp"
            src="/photo.jpeg"
            alt="photo"
            class="object-cover h-full w-full  zoom-effect"
          />
        </div>
      </div>
    </section>
    <ContactForm class="w-full" />
  </div>
</template>

<script setup lang="ts">
import Typing from '~/components/shared/Typing.vue'
import ContactForm from '~/components/app/ContactForm.vue'
import ShowCvButton from '~/components/app/ShowCvButton.vue'
import { useDefaultSeoMeta } from '~/composables/helpers'

useDefaultSeoMeta()
useHead({
  title: 'Marcelo Vichar - Software Engineer',
})
</script>

<style>
/* The typing animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
</style>

<style>
.zoom-effect {
  transition: transform 0.3s ease;
}

.zoom-effect:hover {
  transform: scale(1.25); /* Ajuste o valor conforme necessário */
}
</style>
