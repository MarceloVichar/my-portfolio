<template>
  <section id="hero" class="grid grid-cols-1 lg:grid-cols-2 w-auto gap-16 h-full">
    <div class="h-full w-full flex flex-col justify-center gap-6 items-center lg:items-start">
      <p>{{ $t('HELLO') }}  &#128075;, {{ $t('MY_NAME_IS') }}</p>
    <Typing :text="$t('SOFTWARE_ENGINEER')" class="px-4 lg:px-0 text-6xl h-32 xl:h-auto w-full text-center lg:text-left"/>
  <button class="btn btn-primary w-fit mt-6">Download CV</button>
    </div>
<div class="flex justify-center items-center">
  <div class="h-72 w-72 overflow-hidden rounded-full">
  <img src="~/public/photo.jpeg" alt="photo" class="object-cover h-full w-full  zoom-effect">

  </div>
</div>

    </section>
</template>

<style>


/* The typing animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
</style>
<script setup lang="ts">
import Typing from "~/components/shared/Typing.vue";

</script>

<style>
.zoom-effect {
  transition: transform 0.3s ease;
}

.zoom-effect:hover {
  transform: scale(1.25); /* Ajuste o valor conforme necessário */
}
</style>
