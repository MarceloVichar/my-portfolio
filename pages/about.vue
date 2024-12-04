<template>
  <div class="flex flex-col gap-12">
    <PageTitle :title="$t('ABOUT_ME')" />
    <PageIntro :text="$t('ABOUT_ME_INTRO')" />
    <CardDetails
      v-for="(card, i) in cards"
      :key="i"
      :title="card.title || ''"
      :content="card.content || ''"
      :image-src="card.imageSrc"
      :inverted="i % 2 === 0"
    />
    <ContactForm class="w-full" />
  </div>
</template>

<script setup lang="ts">
import CardDetails from '~/components/shared/CardDetails.vue'
import ContactForm from '~/components/app/ContactForm.vue'
import PageTitle from '~/components/shared/PageTitle.vue'
import PageIntro from '~/components/shared/PageIntro.vue'

const { $config } = useNuxtApp()

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

const { t } = useI18n()

const cards = [
  {
    title: t('WHO_I_AM'),
    content: t('WHO_I_AM_TEXT'),
    imageSrc: '/about-me/married.jpg',
  },
  {
    title: t('MY_HISTORY'),
    content: [
      t('MY_HISTORY_TEXT_1'),
      t('MY_HISTORY_TEXT_2'),
    ],
    imageSrc: '/about-me/utfpr.jpg',
  },
  {
    title: t('BRAZILIAN_ARMY'),
    content: [
      t('BRAZILIAN_ARMY_TEXT_1'),
      t('BRAZILIAN_ARMY_TEXT_2'),
    ],
    imageSrc: '/about-me/army.jpg',
  },
  {
    title: t('FOOTBALL'),
    content: t('FOOTBALL_TEXT'),
    imageSrc: '/about-me/flamengo.jpeg',
  },
  {
    title: t('PERSONAL_VALUES'),
    content: [
      t('PERSONAL_VALUES_TEXT_1'),
      t('PERSONAL_VALUES_TEXT_2'),
    ],
    imageSrc: '/about-me/values.jpg',
  },
]
</script>
