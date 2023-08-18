// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  // ssr: false,
  // layout:true,
  app: {
    // https://nuxt.com/docs/api/configuration/nuxt-config#baseurl
    baseURL: process.env.BASE_URL || "/uni-md",
    // https://nuxt.com/docs/getting-started/transitions#page-transitions
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: [
    // "~/assets/themes/default/css-variable.scss",
    "~/assets/themes/default/reset.scss",
    "~/assets/themes/default/code.scss",
    "~/assets/themes/default/links.scss",
    "~/assets/themes/default/ordered-list.scss",
    // "~/assets/themes/default/unordered-list.scss",
    "~/assets/themes/default/headings.scss",
  ],
  alias: {
    // "@": "~/assets",
  },
  runtimeConfig: { public: { baseURL: "http://localhost:3002/api/uni-md" } },
  // https://nuxt.com/docs/api/configuration/nuxt-config#devserver
  devServer: { host: "0.0.0.0", port: +(process.env.BASE_URL || 3001) },
  // https://nuxt.com/docs/api/configuration/nuxt-config#typescript
  // https://nuxt.com/docs/guide/concepts/typescript
  typescript: { strict: true, typeCheck: true },
  nitro: {
    // https://nitro.unjs.io/config#devproxy
    // devProxy: {
    //   "/api/uni-md": {
    //     target: "http://localhost:3002", // 这里是接口地址
    //     changeOrigin: true,
    //     prependPath: true,
    //   },
    // },
  },
  modules: ["@element-plus/nuxt", "nuxt-icon", "@nuxtjs/supabase"],
  // supabase: {
  //   // https://supabase.nuxtjs.org/get-started#redirectoptions
  //   redirectOptions: {
  //     login: "/login",
  //     callback: "/",
  //     exclude: [],
  //   },
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // https://nuxt.com/docs/getting-started/styling#using-preprocessors
          additionalData:
            '@use "@/assets/themes/default/css-variable.scss" as *;',
        },
      },
    },
  },
  // elementPlus: { /** Options */ }
});
