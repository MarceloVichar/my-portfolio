<template>
  <div class="flex flex-col gap-12">
    <PageTitle :title="$t('MY_SKILLS')" />
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
        title="RDS"
        :rating="5"
        :initial-year="2023"
        image-src="/stack/db/rds.png"
      />
      <SkillCard
        title="Aurora"
        :rating="5"
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
        title="Kubernets"
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
</script>

<style>
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
}
</style>
