<template>
  <div>
    <a :href="url"> <Icon name="uil:github" /> Sign in with GitHub</a>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
console.log(config);

// scope
// https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps
const url = `https://github.com/login/oauth/authorize?scope=user&client_id=${config.public.GITHUB_CLIENT_ID}&redirect_uri=${config.public.GITHUB_REDIRECT_URI}`;
</script>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 250px;
  height: 40px;
  border-radius: 9999px;
  color: rgb(15, 20, 25);
  border: 1px solid rgb(207, 217, 222);
  margin-top: 12px;
  margin-bottom: 12px;
  & svg {
    margin-right: 4px;
  }
}
</style>
