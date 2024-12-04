<template>
  <div
    class="card bg-base-300 lg:bg-base-300 lg:hover:bg-base-300 transition duration-500 shadow-xl pb-4 lg:pb-0 rounded-xl"
  >
    <figure>
      <NuxtImg
        format="webp"
        :src="imageSrc"
        :alt="title"
      />
    </figure>
    <div class="grow card-body p-4 gap-6">
      <h2 class="flex-none card-title block text-center lg:text-left">
        {{ title }}
      </h2>
      <div class="grow flex flex-col gap-4">
        <div class="text-sm">
          {{ description }}
        </div>
        <template v-if="repository">
          <a
            :href="repository"
            target="_blank"
          >
            <button class="btn btn-link btn-xs p-0">
              <Icon name="ri:link" />
              {{ $t('VIEW_REPOSITORY') }}
            </button>
          </a>
        </template>
        <template v-else>
          <p class="text-xs text-gray-500 cursor-not-allowed">
            {{ $t('PRIVATE_REPOSITORY') }}
          </p>
        </template>
      </div>
      <div class="flex-none flex gap-2 justify-center">
        <template
          v-for="icon in devIcons"
          :key="icon"
        >
          <Icon
            v-if="getIconName(icon)"
            :name="getIconName(icon)"
            :title="icon"
            class="w-10 h-10 shadow"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  imageSrc: {
    type: String,
    default: '',
  },
  devIcons: {
    type: Array,
    default: () => [],
  },
  repository: {
    type: String,
    default: '',
  },
})

const getIconName = (icon) => {
  const iconMapper = {
    vue: 'skill-icons:vuejs-dark',
    nuxt: 'skill-icons:nuxtjs-dark',
    js: 'skill-icons:javascript',
    ts: 'skill-icons:typescript',
    php: 'skill-icons:php-dark',
    laravel: 'skill-icons:laravel-dark',
    nest: 'skill-icons:nestjs-dark',
    docker: 'skill-icons:docker',
    kubernetes: 'skill-icons:kubernetes',
    aws: 'skill-icons:aws-dark',
    react: 'skill-icons:react-dark',
    tailwind: 'skill-icons:tailwindcss-dark',
  }

  return iconMapper[icon] || ''
}
</script>
