<template>
  <div class="login">
    <div class="title">uni-md</div>
    <SignInWithGoogle></SignInWithGoogle>
    <SignInWithGitHub></SignInWithGitHub>

    <el-divider content-position="center">or</el-divider>

    <el-tabs
      v-model="activeLoginType"
      class="login-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane
        v-for="item in loginType"
        :key="item"
        :label="item"
        :name="item"
      ></el-tab-pane>
    </el-tabs>

    <el-input
      v-model="inputA"
      :type="inputType"
      :autocomplete="inputType"
      :placeholder="activeLoginType"
      clearable
    />

    <el-input
      v-model="inputB"
      type="password"
      placeholder="Password"
      clearable
      show-password
    />

    <div class="sign-in" @click="onSignIn">Sign in</div>

    <!-- <NuxtLink>Forget Password?</NuxtLink> -->

    <div class="create">or, <NuxtLink to="/">create an account</NuxtLink></div>
  </div>
</template>

<script setup lang="ts">
import { TabsPaneContext } from "element-plus";

import { useAuthStore } from "../store/auth";

const store = useAuthStore();

const loginType = ["Username", "Email", "Phone"];

const activeLoginType = ref<string>(loginType[0]);

// <input> types https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
// autocomplete https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocomplete
const inputType = computed(() => {
  return activeLoginType.value === "Username"
    ? "text"
    : activeLoginType.value === "Email"
    ? "email"
    : "tel";
});

const inputA = ref("");
const inputB = ref("");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab.index, event);
};

const validateInput = () => {
  return inputA.value.length && inputB.value.length >= 6;
};

const onSignIn = async () => {
  if (!validateInput()) {
    return;
  }

  if (activeLoginType.value == "Username") {
    const { data, pending, error, refresh } = await login({
      type: "username",
      username: inputA.value,
      password: inputB.value,
    });
    console.log(data.value?.data);
    if (data.value?.code === 200 && data.value.message === "Success") {
      store.login({ token: data.value.data });
      navigateTo("/");
    }
  } else if (activeLoginType.value == "Email") {
    const { data, pending, error, refresh } = await login({
      type: "email",
      email: inputA.value,
      password: inputB.value,
    });
    console.log(data.value?.data);
    if (data.value?.code === 200 && data.value.message === "Success") {
      store.login({ token: data.value.data });
      navigateTo("/");
    }
  } else {
    const { data, pending, error, refresh } = await login({
      type: "phone",
      phone: inputA.value,
      password: inputB.value,
    });
    console.log(data.value?.data);
    if (data.value?.code === 200 && data.value.message === "Success") {
      store.login({ token: data.value.data });
      navigateTo("/");
    }
  }
};

const checkResponse = () => {};
</script>

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
    text-align: center;
    color: rgb(15, 20, 25);
    font-size: 24px;
    margin-bottom: 24px;
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
  & div.sign-in {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 40px;
    border-radius: 9999px;
    color: rgb(255, 255, 255);
    background-color: rgb(31, 41, 55);
    border: 1px solid rgb(207, 217, 222);
    margin-bottom: 12px;
  }

  & div.create {
    color: rgb(107, 114, 128);
    & a {
      all: unset;
      cursor: pointer;
      text-decoration: underline;
      &:hover {
        color: rgb(0, 0, 0);
      }
    }
  }
}

.login-tabs {
  user-select: none;
}

:deep(.el-input__wrapper) {
  border-radius: 80px;
}
:deep(.el-input:nth-last-child(3)) {
  margin-top: 12px;
  margin-bottom: 12px;
}

:deep(.el-input__inner::placeholder) {
  color: rgb(75, 85, 99);
}
</style>
