// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['v-gsap-nuxt'],
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
      title: 'FLEX GO.',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  }
})