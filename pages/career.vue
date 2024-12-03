<template>
  <div class="flex flex-col gap-12">
    <PageTitle :title="$t('MY_CAREER')" />
    <div
      v-for="exp in experiences"
      :key="exp.title"
    >
      <h2 class="text-lg lg:text-xl font-bold text-center lg:text-left mb-6">
        {{ exp.title }}
      </h2>
      <div class="flex flex-col gap-4 ">
        <ExperienceCard
          v-for="(item, i) in exp.items"
          :key="`${exp.title}-${item.title}-${i}`"
          :title="item.title"
          :content="item.content"
          :institution="item.institution"
          :image-src="item.imageSrc"
        />
      </div>
    </div>
    <ContactForm class="w-full" />
  </div>
</template>

<script setup lang="ts">
import PageTitle from '~/components/shared/PageTitle.vue'
import ExperienceCard from '~/components/app/ExperienceCard.vue'
import ContactForm from '~/components/app/ContactForm.vue'

const { t } = useI18n()

const professionalExperiences = [
  {
    title: t('FULL_STACK_DEVELOPER'),
    content: [
      t('ZRO_DESCRIPTION'),
      `01/23 - ${t('PRESENT')}`,
    ],
    institution: `Zro Bank - ${t('PAYMENTS_INSTITUTION')}`,
    imageSrc: '/carrer/zrobank.jpeg',
  },
  {
    title: `${t('FULL_STACK_DEVELOPER')}/${t('ENGINEER')}`,
    content: [
      t('LETS_DESCRIPTION'),
      `01/22 - ${t('PRESENT')}`,
    ],
    institution: `Let's Grow - ${t('SOFTWARE_FACTORY')}`,
    imageSrc: '/carrer/lets.jpeg',
  },
  {
    title: t('OTHER_EXPERIENCES'),
    content: [
      t('OTHER_EXPERIENCES_DESCRIPTION'),
      `01/21 - 01/22`,
    ],
    imageSrc: '/carrer/other.jpg',
  },
]

const academicExperiences = [
  {
    title: t('POST_GRADUATE_ARCH'),
    institution: 'Facuvale - Faculdade do Vale do Aço',
    content: [
      t('POST_GRADUATE_ARCH_DESCRIPTION'),
      `01/24 - 12/24`,
    ],
    imageSrc: '/carrer/facuvale.png',
  },
  {
    title: t('POST_GRADUATE_CLOUD'),
    institution: 'Facuvale - Faculdade do Vale do Aço',
    content: [
      t('POST_GRADUATE_CLOUD_DESCRIPTION'),
      `01/24 - 12/24`,
    ],
    imageSrc: '/carrer/facuvale.png',
  },
  {
    title: t('DEGREE_TITLE'),
    institution: 'Universidade Tecnológica Federal do Paraná',
    content: [
      t('DEGREE_DESCRIPTION'),
      `03/19 - 06/24`,
    ],
    imageSrc: '/carrer/utfpr.jpeg',
  },
]

const experiences = [
  {
    title: t('PROFESSIONAL_EXPERIENCE'),
    items: professionalExperiences,
  },
  {
    title: t('ACADEMIC_EXPERIENCE'),
    items: academicExperiences,
  },
]
</script>
