<template>
  <form
    class="flex flex-col gap-4 max-w-3xl mx-auto p-4 bg-base-200 rounded shadow"
    @submit.prevent="submitForm"
  >
    <p class="text-center text-3xl">
      {{ $t('CONTACT_ME') }}
    </p>
    <div class="form-control w-full">
      <div class="label">
        <span class="label-text text-sm">{{ $t('NAME') }}</span>
      </div>
      <label class="input input-bordered  flex items-center gap-2">
        <Icon name="iconamoon:profile-fill" />
        <input
          v-model="form.name"
          required
          type="text"
          class="grow"
          :placeholder="$t('ENTER_YOUR_NAME')"
        >
      </label>
    </div>

    <div class="form-control w-full">
      <div class="label">
        <span class="label-text text-sm">{{ $t('EMAIL') }}</span>
      </div>
      <label class="input input-bordered  flex items-center gap-2">
        <Icon name="material-symbols:mail" />
        <input
          v-model="form.email"
          required
          type="email"
          class="grow"
          :placeholder="$t('ENTER_YOUR_EMAIL')"
        >
      </label>
    </div>

    <div class="form-control">
      <div class="label">
        <span class="label-text text-sm">{{ $t('MESSAGE') }}</span>
      </div>
      <textarea
        v-model="form.message"
        required
        class="textarea textarea-bordered h-32 "
        :placeholder="$t('ENTER_YOUR_MESSAGE')"
      />
    </div>
    <div class="flex justify-center">
      <button
        type="submit"
        :disabled="sendingEmail"
        class="btn btn-primary h-auto w-44 disabled:bg-primary disabled:text-primary-content disabled:opacity-100"
      >
        <span
          v-if="sendingEmail"
          class="loading loading-spinner"
        />
        <span
          v-else
        >
          {{ $t('SEND_MESSAGE') }}
        </span>
      </button>
    </div>
    <div class="text-center my-4">
      <p class="text-xs">
        {{ $t('OR_SEND_AN_EMAIL_TO') }}:
      </p>
      <p>{{ PROFESSIONAL_MAIL }}</p>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const {
  WEB3FORMS_API_KEY,
  PROFESSIONAL_MAIL,
} = useRuntimeConfig().public

const sendingEmail = ref(false)

const { t } = useI18n()

const form = ref({
  access_key: WEB3FORMS_API_KEY,
  subject: 'New Submission from Web3Forms',
  name: '',
  email: '',
  message: '',
})

const submitForm = async () => {
  sendingEmail.value = true

  await $fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: form.value,
  })
    .then(() => {
      successNotify(t('MESSAGE_SENT'))
    })
    .catch(() => {
      errorNotify(t('UNABLE_TO_SEND_MESSAGE'))
    })
    .finally(() => {
      form.value.name = ''
      form.value.email = ''
      form.value.message = ''
      sendingEmail.value = false
    })
}
</script>
