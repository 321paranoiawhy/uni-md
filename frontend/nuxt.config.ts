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
    head: {
      script: [
        {
          // https://developers.google.com/identity/gsi/web/guides/migration#libraries_and_configuration
          src: "https://accounts.google.com/gsi/client",
        },
      ],
    },
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
  runtimeConfig: {
    public: {
      // baseURL: "http://localhost:3002/api/uni-md",
      GOOGLE_CLIENT_ID:
        "764537731222-68ntdabncu81o51ck4rsggs5eu8jvode.apps.googleusercontent.com",
      GITHUB_CLIENT_ID: "a2819d21e1fd587fb6d8",
      GITHUB_CLIENT_SECRET: "38796c08518172a42160ca575721a3853413bf89",
      // GITHUB_REDIRECT_URI: "https://321paranoiawhy.github.io/uni-md/",
      // 对应 Authorization callback URL (后端)
      GITHUB_REDIRECT_URI: "http://localhost:3002/uni-md/api/auth/github/",
    },
  },
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
  // modules: ["@element-plus/nuxt", "nuxt-icon", "@nuxtjs/supabase"],
  modules: ["@element-plus/nuxt", "nuxt-icon", "@pinia/nuxt"],
  components: [
    {
      path: "~/components",
      pathPrefix: false, // https://nuxt.com/docs/guide/directory-structure/components#component-names
    },
  ],
  // scripts: [
  //   {
  //     src: "https://accounts.google.com/gsi/client",
  //   },
  // ],
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
