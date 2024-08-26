// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "nuxt-mongoose",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/cloudinary",
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: "models",
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
  cloudinary: {
    cloudName: "dwndoufbt",
    uploadPreset: "defaultSigned",
    apiKey: "756325126456533",
    analytics: true,
    cloud: {},
    url: {},
  },
});
