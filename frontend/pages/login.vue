<!-- App.vue -->
<template>
  <div>login page</div>
  <!-- <Auth
    :supabaseClient="supabaseClient"
    :appearance="{
      theme: ThemeSupa,
    }"
    :providers="['google', 'github', 'twitter']"
  /> -->
</template>

<script setup lang="ts">
// Import predefined theme
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@nuxtbase/auth-ui-vue";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = useSupabaseClient();

const { supabaseUser } = useSupabaseUser();

// 退出登录
// https://supabase.com/docs/guides/auth/social-login/auth-github#add-login-code-to-your-client-app
const signout = async () => {
  const { error } = await supabaseClient.auth.signOut();
};

// watch(
//   () => supabaseUser.value,
//   (user) => {
//     if (!user) {
//       return router.push("/");
//     }
//   },
//   { immediate: true }
// );

// watchEffect(() => {
//   if (supabaseUser?.value) {
//     navigateTo("/");
//   }
// });

// console.log(process.env.SUPABASE_URL);
// console.log(process.env.SUPABASE_KEY);

// const supabaseClient = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );
</script>
