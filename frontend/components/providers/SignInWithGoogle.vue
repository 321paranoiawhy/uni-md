<template>
  <div id="google-signin">Sign In With Google</div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

const onResponse = (res: any) => {
  console.log(res, res.credential);
};

onMounted(() => {
  // console.log(runtimeConfig.public.GOOGLE_CLIENT_ID);

  google.accounts.id.initialize({
    client_id: runtimeConfig.public.GOOGLE_CLIENT_ID,
    callback: onResponse,
    context: "signin",
  });

  google.accounts.id.renderButton(document.getElementById("google-signin"), {
    type: "standard",
    size: "large",
    text: "signin_with",
    shape: "pill",
    logo_alignment: "left",
    width: "250",
  });
});
</script>
