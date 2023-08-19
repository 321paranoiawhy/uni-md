// https://nuxt.com/docs/api/utils/define-nuxt-route-middleware#type
// RouteLocationNormalized

import { RouteLocationNormalized } from ".nuxt/vue-router";

// https://router.vuejs.org/api/interfaces/routelocationnormalized
export default defineNuxtRouteMiddleware(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    // 可使用 process.server 和 process.client 区分服务端和客户端
    console.log(from.query, to.query);

    // TODO 迁移至 pinia 存储
    const cookie = useCookie(process.env.UNI_MD_COOKIE || "uni_md_cookie");
    console.log("cookie", cookie.value);

    // 后端重定向后带有 cookie 查询参数, 如 GitHub 登录
    if (from.path === "/" && from.query.cookie) {
      console.log("已有 cookie", from.fullPath);
      // 设置 cookie
      cookie.value = from.query.cookie as string;

      // TODO 重定向至首页, 并去掉 query 中的 cookie
      // const currentUrl = from.fullPath;
      // window.history.pushState({}, null, newUrl);
      // return navigateTo("/", { replace: true, redirectCode: 301 });
    }

    // 如果无 cookie, 则跳转至登录页面
    // 避免无限重定向
    if (!cookie.value && from.path !== "/login" && to.path !== "/login") {
      console.log("Needs login.");
      return navigateTo("/login", { replace: true, redirectCode: 301 });
    }
  }
);
