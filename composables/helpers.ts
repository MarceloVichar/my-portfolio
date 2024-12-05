export const useDefaultSeoMeta = () => {
  const { $config } = useNuxtApp()

  useSeoMeta({
    title: 'Marcelo Vichar - Software Engineer',
    description: 'Marcelo Vichar, Software Engineer specializing in cloud computing, DevOps, Software Architecture, Full Stack and scalable solutions.',
    author: 'Marcelo Vichar',
    ogTitle: 'Marcelo Vichar - Software Engineer',
    ogDescription: 'Marcelo Vichar, Software Engineer specializing in cloud computing, DevOps, Software Architecture, Full Stack and scalable solutions.',
    ogImage: $config.public?.NUXT_BASE_URL + '/photo.jpeg',
    ogUrl: $config.public?.NUXT_BASE_URL,
    twitterCard: 'marcelo_vichar',
    twitterTitle: 'Marcelo Vichar - Software Engineer',
    twitterDescription: 'Marcelo Vichar, Software Engineer specializing in cloud computing, DevOps, Software Architecture, Full Stack and scalable solutions.',
    twitterImage: $config.public?.NUXT_BASE_URL + '/photo.jpeg',
  })
}
