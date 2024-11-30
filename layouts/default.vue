<template>
  <div class="flex flex-col min-h-screen">
    <Header/>
    <main class="grow main pt-20 lg:pt-28 pb-4 px-2 lg:px-4 flex justify-center">
      <div class="w-full xl:w-[1280px]">

      <slot/>
      </div>
    </main>
    <Footer />
  </div>
</template>


<script setup lang="ts">
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";

</script>

