// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  app: {
    // https://nuxt.com/docs/api/configuration/nuxt-config#baseurl
    baseURL: "/uni-md",
  },
  // https://nuxt.com/docs/api/configuration/nuxt-config#devserver
  devServer: { host: "0.0.0.0", port: 3001 },
  // https://nuxt.com/docs/api/configuration/nuxt-config#typescript
  // https://nuxt.com/docs/guide/concepts/typescript
  typescript: { strict: true, typeCheck: true },
  nitro: {
    // https://nitro.unjs.io/config#devproxy
    devProxy: {
      "/api": {
        target: "http://localhost:3001", // 这里是接口地址
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  modules: ["@element-plus/nuxt", "nuxt-icon"],
  // vite: { css: { preprocessorOptions: { scss: {} } } },
  // elementPlus: { /** Options */ }
});
