<template>
  <div class="login">
    <SignInWithGoogle></SignInWithGoogle>
    <SignInWithGitHub></SignInWithGitHub>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
