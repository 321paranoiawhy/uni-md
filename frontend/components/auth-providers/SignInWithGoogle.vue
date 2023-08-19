<template>
  <div id="google-signin" ref="googleSignInButton">Sign In With Google</div>
</template>

<script lang="ts" setup>
// Google One Tag Sign In
// Nuxt 2: https://gist.github.com/srestraj/c61d0a025f53ab7f99bd875eace5cc84
// Nuxt 3: https://gist.github.com/srestraj/eed9d2f199ac4024e029e3012ff2829b?permalink_comment_id=4509209#gistcomment-4509209
/// <reference types='google.accounts' />

const runtimeConfig = useRuntimeConfig();

const googleSignInButton = ref<HTMLDivElement | null>();

// CredentialResponse
// https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse
const onResponse = (res: any) => {
  console.log(res, res.credential);
};

onMounted(() => {
  // console.log(runtimeConfig.public.GOOGLE_CLIENT_ID);

  // IdConfiguration
  google.accounts.id.initialize({
    client_id: runtimeConfig.public.GOOGLE_CLIENT_ID,
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
