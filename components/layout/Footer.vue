<template>
  <footer class="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a v-for="socialMedia in socialMedias" :key="socialMedia.icon" :href="socialMedia.link" target="_blank">
        <Icon :name="socialMedia.icon" class="text-2xl hover:text-primary" />
      </a>
    </div>
  </nav>
  <aside>
    <p>{{ $t('COPYRIGHT') }}</p>
  </aside>
</footer>
</template>

<script setup>
const socialMedias = [
  { icon: 'uil:whatsapp', link: 'https://wa.me/5542991565678' },
  { icon: 'uil:github', link: 'https://github.com/MarceloVichar' },
   { icon: 'uil:instagram', link: 'https://www.instagram.com/marcelovichar/' },
   { icon: 'uil:linkedin', link: 'https://www.linkedin.com/in/marcelo-vichar-49271419b/' },
   { icon: 'uil:facebook', link: 'https://www.facebook.com/profile.php?id=100002973136158' },
]
</script>
