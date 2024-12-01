export const successNotify = (message: string) => {
  return useNuxtApp().$toast.success(message)
}

export const errorNotify = (message: string) => {
  return useNuxtApp().$toast.error(message)
}
