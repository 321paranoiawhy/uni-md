<template>
  <div>
    <a :href="url">Sign In With GitHub</a>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
// console.log(runtimeConfig.public.GITHUB_CLIENT_ID);
// console.log(runtimeConfig.public.GITHUB_CLIENT_SECRET);
// console.log(runtimeConfig.public.GITHUB_REDIRECT_URI);

// scope
// https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps
const url = `https://github.com/login/oauth/authorize?scope=user&client_id=${runtimeConfig.public.GITHUB_CLIENT_ID}&redirect_uri=${runtimeConfig.public.GITHUB_REDIRECT_URI}`;
</script>

<style scoped lang="scss"></style>
