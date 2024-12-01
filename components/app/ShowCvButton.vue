<template>
  <button
    class="btn btn-primary w-fit mt-6"
    @click.prevent="showCv"
  >
    {{ $t('SHOW_CV') }}
  </button>
</template>

<script setup>
const { locale } = useI18n()

onMounted(() => {
  console.log('mounted')
  console.log(locale.value)
})

const getFile = () => {
  const cvMapper = {
    en: 'MarceloVichar-en.pdf',
    pt: 'MarceloVichar-pt.pdf',
  }

  return cvMapper[locale.value] || cvMapper.en
}

const showCv = () => {
  const file = getFile()

  window.open(file, '_blank')
}
</script>
