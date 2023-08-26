<template>
  <div id="google-signin" ref="googleSignInButton">Sign In With Google</div>
</template>

<script lang="ts" setup>
// Google One Tag Sign In
// Nuxt 2: https://gist.github.com/srestraj/c61d0a025f53ab7f99bd875eace5cc84
// Nuxt 3: https://gist.github.com/srestraj/eed9d2f199ac4024e029e3012ff2829b?permalink_comment_id=4509209#gistcomment-4509209
/// <reference types='google.accounts' />

import { useAuthStore } from "../../store/auth";
import { AuthResponse, UnifiedResponse } from "../../types/api";

const config = useRuntimeConfig();

const googleSignInButton = ref<HTMLDivElement | null>();

const store = useAuthStore();
const router = useRouter();

// CredentialResponse
// https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse
const onResponse = async (res: any) => {
  console.log(res, res.credential);
  // Return Values
  // https://nuxt.com/docs/api/composables/use-fetch#return-values
  const { data, pending, refresh, error, status } = await useFetch<
    UnifiedResponse<AuthResponse>
  >("http://localhost:3002/uni-md/api/auth/google", {
    method: "post",
    body: { credential: res.credential },
  });
  console.log("token", data.value?.data?.token);
  data.value?.data && store.login(data.value?.data);
  console.log(router.getRoutes());
  // TODO 登录成功后跳转至首页
  // router.back();
  // router.replace("/");
  // router.push("/");
};

onMounted(() => {
  // console.log(runtimeConfig.public.GOOGLE_CLIENT_ID);

  // IdConfiguration
  google.accounts.id.initialize({
    client_id: config.public.GOOGLE_CLIENT_ID,
    callback: onResponse,
    context: "signin",
  });

  // HTMLElement, GsiButtonConfiguration
  google.accounts.id.renderButton(googleSignInButton.value!, {
    type: "standard",
    size: "large",
    text: "signin_with",
    theme: "filled_blue",
    shape: "pill",
    logo_alignment: "left",
    width: 250,
  });

  google.accounts.id.prompt(); // also display the One Tap dialog
});
</script>
