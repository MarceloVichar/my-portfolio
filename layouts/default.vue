<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="grow main pt-20 lg:pt-28 pb-4 px-2 lg:px-4 flex justify-center">
      <div class="w-full xl:w-[1280px]">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'

const head = useLocaleHead()
const route = useRoute()

watch(() => route.path, () => {
  useHead({
    htmlAttrs: {
      lang: head.value.htmlAttrs?.lang,
      dir: head.value.htmlAttrs?.dir,
    },
    link: head.value.link.map(link => ({
      hid: link?.hid,
      rel: link?.rel,
      href: link?.href,
      hreflang: link?.hreflang,
    })),
    meta: head.value.meta.map(meta => ({
      hid: meta?.hid,
      property: meta?.property,
      content: meta?.content,
    })),
  })
}, { immediate: true })
</script>
