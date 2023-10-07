// https://nuxt.com/docs/api/utils/define-nuxt-route-middleware#type
// RouteLocationNormalized

// import { RouteLocationNormalized } from ".nuxt/vue-router";
import { RouteLocationNormalized } from "#vue-router";
import { useAuthStore } from "../store/auth";

// https://router.vuejs.org/api/interfaces/routelocationnormalized
export default defineNuxtRouteMiddleware(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    // 可使用 process.server 和 process.client 区分服务端和客户端
    if (process.server) {
      return;
    }

    const auth = useAuthStore();

    // https://dev.to/rafaelmagalhaes/authentication-in-nuxt-3-375o
    if (!auth.token && to.path !== "/login") {
      // https://nuxt.com/docs/api/utils/abort-navigation
      abortNavigation();
      return navigateTo("/login");
    }

    // 已登录的状态下, 直接进入 login 会重定向到首页
    // TODO [Vue warn]: Hydration node mismatch:
    if (auth.token && to.path === "/login") {
      abortNavigation();
      return navigateTo("/");
      // return navigateTo("/", { replace: true, redirectCode: 301 });
    }
  }
);
