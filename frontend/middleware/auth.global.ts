export default defineNuxtRouteMiddleware((to, from) => {
  // 服务端无 localStorage
  if (process.server) {
    console.log("server side");
    return;
  }

  console.log(
    localStorage.getItem(
      process.env.TOKEN_NAME ||
        "sb-ezvhzqzxspotwzmxcysq-auth-token-code-verifier"
    ),
    from.path,
    to.path
  );
  // if (
  //   !localStorage.getItem(
  //     process.env.TOKEN_NAME ||
  //       "sb-ezvhzqzxspotwzmxcysq-auth-token-code-verifier"
  //   ) &&
  //   to.path != "/login"
  // ) {
  //   console.log("Needs login.");
  //   return navigateTo("/login", { replace: true, redirectCode: 301 });
  // }
});
