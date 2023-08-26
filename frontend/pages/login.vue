import { SignInWithUsername, NuxtLink, Icon } from '../.nuxt/components';
<template>
  <div class="login">
    <div class="title">Sign in to uni-md</div>
    <SignInWithGoogle></SignInWithGoogle>
    <SignInWithGitHub></SignInWithGitHub>

    <div class="or">or</div>

    <NuxtLink to="/login">Sign in with Username</NuxtLink>
    <NuxtLink to="/login">Sign in with Email</NuxtLink>
    <NuxtLink to="/login">Sign in with Phone</NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.login {
  width: 250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .title {
    width: 100%;
    color: rgb(15, 20, 25);
    font-size: 24px;
    margin-bottom: 24px;
  }
  & .or {
    width: 100%;
    text-align: center;
    position: relative;
    &::before {
      content: " ";
      position: absolute;
      top: 50%;
      left: 0;
      width: 40%;
      height: 1px;
      background-color: rgb(207, 217, 222);
    }
    &::after {
      content: " ";
      position: absolute;
      top: 50%;
      right: 0;
      width: 40%;
      height: 1px;
      background-color: rgb(207, 217, 222);
    }
  }
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 40px;
    border-radius: 9999px;
    color: rgb(15, 20, 25);
    border: 1px solid rgb(207, 217, 222);
    margin-top: 12px;
    margin-bottom: 12px;
  }
}
</style>
