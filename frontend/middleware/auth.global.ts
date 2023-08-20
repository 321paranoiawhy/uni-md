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
      return navigateTo("/login", { replace: false, redirectCode: 302 });
    }
    // console.log(from, to);
    // 已登录的状态下, 直接进入 login 会重定向到首页
    if (auth.token && from.path === "/login" && to.path === "/login") {
      return navigateTo("/", { replace: true, redirectCode: 301 });
    }

    // 可使用 process.server 和 process.client 区分服务端和客户端
    // console.log("query", from.query, to.query);

    // // TODO 迁移至 pinia 存储
    // const cookie = useCookie(process.env.UNI_MD_COOKIE || "uni_md_cookie");
    // // console.log("cookie", cookie.value);

    // // 后端重定向后带有 cookie 查询参数, 如 GitHub 登录
    // if (from.path === "/" && from.query.cookie) {
    //   // console.log("已有 cookie", from.fullPath);
    //   // 设置 cookie
    //   cookie.value = from.query.cookie as string;

    //   // TODO 重定向至首页, 并去掉 query 中的 cookie
    //   // TODO 可在 pages/index.vue onMounted 中重新更改页面地址, 进而去掉查询参数
    //   // const currentUrl = from.fullPath;
    //   // window.history.pushState({}, null, newUrl);
    //   // return navigateTo("/", { replace: true, redirectCode: 301 });
    // }

    // 如果无 cookie, 则跳转至登录页面
    // 避免无限重定向

    // if (!cookie.value && from.path !== "/login" && to.path !== "/login") {
    //   console.log("Needs login.");
    //   return navigateTo("/login", { replace: true, redirectCode: 301 });
    // }
  }
);
