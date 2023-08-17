export default defineNuxtRouteMiddleware((to, from) => {
  console.log(
    localStorage.getItem("sb-ezvhzqzxspotwzmxcysq-auth-token"),
    to.path
  );
  if (
    localStorage.getItem("sb-ezvhzqzxspotwzmxcysq-auth-token") &&
    to.path != "/"
  ) {
    return navigateTo("/", { replace: true, redirectCode: 301 });
  }
});
