// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxtjs/device',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    ],

  css: ['@/assets/css/main.css'],
})
