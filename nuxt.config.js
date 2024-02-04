export default {
  env: {
    API_KEY: process.env.API_KEY,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-m1-2105",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main"],

  generate: {
    router: true,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv", // .envの設定を追加する
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/emotion
    "@nuxtjs/emotion",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    devMiddleware: {
      headers: {
        "X-Custom-Header": "yes",
      },
    },
  },

  babel: {
    // jsx
    plugins: ["transform-vue-jsx"],
  },
};
