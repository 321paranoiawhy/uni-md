// https://nuxt.com/docs/api/utils/define-nuxt-route-middleware#type
// RouteLocationNormalized

import { RouteLocationNormalized } from ".nuxt/vue-router";
import { useAuthStore } from "../store/auth";

// https://router.vuejs.org/api/interfaces/routelocationnormalized
export default defineNuxtRouteMiddleware(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    // 可使用 process.server 和 process.client 区分服务端和客户端
    if (process.server) {
      return;
    }

    const auth = useAuthStore();

    if (!auth.token && to.path !== "/login") {
      return navigateTo("/login");
      // return navigateTo("/login", { replace: false, redirectCode: 302 });
    }
    // console.log(from, to);

    // 已登录的状态下, 直接进入 login 会重定向到首页
    // TODO [Vue warn]: Hydration node mismatch:
    if (auth.token && from.path === "/login" && to.path === "/login") {
      // return navigateTo("/");
      return navigateTo("/", { replace: true, redirectCode: 301 });
    }
  }
);
