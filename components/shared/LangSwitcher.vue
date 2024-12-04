<template>
  <div class="flex items-center gap-2">
    <button
      class="p-1 rounded-full flex justify-center items-center h-fit"
      :class="locale === 'pt' ? 'bg-accent' : 'bg-none border-none'"
      aria-label="Change language to Portuguese"
      @click.prevent="changeLocale('pt')"
    >
      <Icon name="emojione:flag-for-brazil" />
    </button>
    <button
      class="p-1 rounded-full flex justify-center items-center h-fit"
      :class="locale === 'en' ? 'bg-accent' : 'bg-none border-none'"
      aria-label="Change language to English"
      @click.prevent="changeLocale('en')"
    >
      <Icon name="emojione:flag-for-united-states" />
    </button>
  </div>
</template>

<script setup>
const { setLocale, locale } = useI18n()

function changeLocale(locale) {
  setLocale(locale)
}
</script>
