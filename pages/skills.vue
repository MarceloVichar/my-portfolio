<template>
  <div class="flex flex-col gap-12">
    <PageTitle :title="$t('MY_SKILLS')" />
    <PageIntro :text="$t('MY_SKILLS_INTRO')" />
    <SkillsContainer :title="$t('PROGRAMMING_LANGUAGES')">
      <SkillCard
        title="Javascript"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/languages/javascript.png"
      />
      <SkillCard
        title="Typescript"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/languages/typescript.png"
      />
      <SkillCard
        title="PHP"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/languages/php.png"
      />
      <SkillCard
        title="Go Lang"
        :rating="2"
        :initial-year="2023"
        image-src="/stack/languages/go.png"
      />
    </SkillsContainer>
    <SkillsContainer :title="$t('FRAMEWORKS')">
      <SkillCard
        title="NestJS"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/frameworks/nest.png"
      />
      <SkillCard
        title="Laravel"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/frameworks/laravel.jpg"
      />
      <SkillCard
        title="VueJS"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/frameworks/vue.png"
      />
      <SkillCard
        title="Nuxt"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/frameworks/nuxt.png"
      />
      <SkillCard
        title="React"
        :rating="3"
        :initial-year="2023"
        image-src="/stack/frameworks/react.png"
      />
      <SkillCard
        title="Next"
        :rating="3"
        :initial-year="2023"
        image-src="/stack/frameworks/next.png"
      />
    </SkillsContainer>
    <SkillsContainer :title="$t('SOFTWARE_ARCHITECTURE')">
      <SkillCard
        title="Clean Arch"
        :rating="4"
        :initial-year="2023"
        image-src="/stack/arch/cleanarchitecture.png"
      />
      <SkillCard
        title="DDD"
        :rating="3"
        :initial-year="2023"
        image-src="/stack/arch/ddd.png"
      />
      <SkillCard
        title="Hexagonal Architecture"
        :rating="3"
        :initial-year="2023"
        image-src="/stack/arch/hexagonal.png"
      />
      <SkillCard
        title="Microservices"
        :rating="4"
        :initial-year="2023"
        image-src="/stack/arch/microservices.png"
      />
      <SkillCard
        title="Micro frontends"
        :rating="3"
        :initial-year="2021"
        image-src="/stack/arch/microfrontend.png"
      />
    </SkillsContainer>
    <SkillsContainer :title="$t('DATA_BASE')">
      <SkillCard
        title="Postgres"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/db/postgres.png"
      />
      <SkillCard
        title="My SQL"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/db/mysql.png"
      />
      <SkillCard
        title="Redis"
        :rating="4"
        :initial-year="2022"
        image-src="/stack/db/redis.png"
      />
      <SkillCard
        title="RDS"
        :rating="4"
        :initial-year="2023"
        image-src="/stack/db/rds.png"
      />
      <SkillCard
        title="Aurora"
        :rating="4"
        :initial-year="2023"
        image-src="/stack/db/aurora.jpg"
      />
      <SkillCard
        title="Mongo"
        :rating="3"
        :initial-year="2023"
        image-src="/stack/db/mongo.png"
      />
      <SkillCard
        title="Dynamo DB"
        :rating="3"
        :initial-year="2023"
        image-src="/stack/db/dynamo.png"
      />
      <SkillCard
        title="Cassandra"
        :rating="2"
        :initial-year="2024"
        image-src="/stack/db/cassandra.png"
      />
    </SkillsContainer>
    <SkillsContainer :title="$t('TOOLS')">
      <SkillCard
        title="Git"
        :rating="5"
        :initial-year="2019"
        image-src="/stack/tools/git.png"
      />
      <SkillCard
        title="GitHub"
        :rating="5"
        :initial-year="2019"
        image-src="/stack/tools/github.png"
      />
      <SkillCard
        title="AWS"
        :rating="4"
        :initial-year="2022"
        image-src="/stack/tools/aws.png"
      />
      <SkillCard
        title="Digital Ocean"
        :rating="2"
        :initial-year="2023"
        image-src="/stack/tools/digital-ocean.png"
      />
      <SkillCard
        title="Docker"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/tools/docker.png"
      />
      <SkillCard
        title="Kubernetes"
        :rating="2"
        :initial-year="2023"
        image-src="/stack/tools/k8s.png"
      />
      <SkillCard
        title="JetBrains"
        :rating="5"
        :initial-year="2021"
        image-src="/stack/tools/jetbrains.png"
      />
      <SkillCard
        title="Jira"
        :rating="4"
        :initial-year="2021"
        image-src="/stack/tools/jira.png"
      />
    </SkillsContainer>
    <ContactForm class="w-full" />
  </div>
</template>

<script setup lang="ts">
import SkillCard from '~/components/app/SkillCard.vue'
import SkillsContainer from '~/components/app/SkillsContainer.vue'
import PageTitle from '~/components/shared/PageTitle.vue'
import ContactForm from '~/components/app/ContactForm.vue'
import PageIntro from '~/components/shared/PageIntro.vue'
import { useDefaultSeoMeta } from '~/composables/helpers'

useDefaultSeoMeta()

useHead({
  title: 'Marcelo Vichar - Software Engineer',
})

const { t } = useI18n()

useSeoMeta({
  title: t('MY_SKILLS'),
  description: t('MY_SKILLS'),
  ogDescription: t('MY_SKILLS'),
})
</script>
