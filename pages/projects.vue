<template>
  <div class="flex flex-col gap-12">
    <PageTitle :title="$t('PROJECTS')" />
    <PageIntro :text="$t('PROJECTS_INTRO')" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :image-src="project.imageSrc"
        :dev-icons="project.devIcons"
        :repository="project.repository"
      />
    </div>
    <ContactForm class="w-full" />
  </div>
</template>

<script setup lang="ts">
import ContactForm from '~/components/app/ContactForm.vue'
import PageTitle from '~/components/shared/PageTitle.vue'
import PageIntro from '~/components/shared/PageIntro.vue'
import ProjectCard from '~/components/app/ProjectCard.vue'

const { $config } = useNuxtApp()
const { t } = useI18n()

useHead({
  title: 'Marcelo Vichar - Software Engineer',
})

useSeoMeta({
  title: 'Marcelo Vichar - Software Engineer',
  description: 'Marcelo Vichar, Software Engineer specializing in cloud computing, DevOps, Software Architecture, Full Stack and scalable solutions.',
  author: 'Marcelo Vichar',
  ogTitle: 'Marcelo Vichar - Software Engineer',
  ogDescription: 'Marcelo Vichar, Software Engineer specializing in cloud computing, DevOps, Software Architecture, Full Stack and scalable solutions.',
  ogImage: '/photo.jpeg',
  ogUrl: $config.public?.NUXT_BASE_URL,
  twitterCard: 'marcelo_vichar',
  twitterTitle: 'Marcelo Vichar - Software Engineer',
  twitterDescription: 'Marcelo Vichar, Software Engineer specializing in cloud computing, DevOps, Software Architecture, Full Stack and scalable solutions.',
  twitterImage: '/photo.jpeg',
})

const projects = [
  {
    title: t('LETSTUR_TITLE'),
    description: t('LETSTUR_DESCRIPTION'),
    imageSrc: '/projects/letstur.png',
    devIcons: ['js', 'ts', 'php', 'laravel', 'vue', 'nuxt'],
  },
  {
    title: t('ZRO_INTERNET_BANKING_TITLE'),
    description: t('ZRO_INTERNET_BANKING_DESCRIPTION'),
    imageSrc: '/projects/banking.png',
    devIcons: ['js', 'ts', 'vue', 'nuxt', 'tailwind'],
  },
  {
    title: t('ZRO_GATEWAY_TITLE'),
    description: t('ZRO_GATEWAY_DESCRIPTION'),
    imageSrc: '/projects/gateway.png',
    devIcons: ['js', 'ts', 'php', 'laravel', 'nest'],
  },
  {
    title: t('MY_WEBSITE_TITLE'),
    description: t('MY_WEBSITE_DESCRIPTION'),
    imageSrc: '/projects/website.png',
    devIcons: ['js', 'ts', 'vue', 'nuxt', 'tailwind'],
    repository: 'https://github.com/MarceloVichar/my-portfolio',
  },
  {
    title: t('CLAPME_TITLE'),
    description: t('CLAPME_DESCRIPTION'),
    imageSrc: '/projects/clapme.png',
    devIcons: ['js', 'ts', 'react', 'tailwind', 'php', 'laravel'],
  },
  {
    title: t('BOILERPLATE_TITLE'),
    description: t('BOILERPLATE_DESCRIPTION'),
    imageSrc: '/projects/laravel.jpg',
    devIcons: ['php', 'laravel'],
    repository: 'https://github.com/MarceloVichar/boilerplate-laravel-11',
  },
]
</script>
