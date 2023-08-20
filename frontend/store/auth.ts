import { defineStore } from "pinia";

type LogInMethod = "google" | "github" | "email" | null;

import { AuthResponse } from "types";

// export interface User {
//   username: string | null;
//   userId: string | null;
//   token: string | null;
//   email: string | null;
// }

// export interface AuthState {
//   user: AuthUser | null;
// }

export const useAuthStore = defineStore("auth", {
  state: (): AuthResponse => {
    const { username, userId, token, email, store, clear } = useAuthCookie();

    return {
      username: username.value, // 是否已登录
      userId: userId.value,
      token: token.value,
      email: email.value,
    };
  },
  actions: {
    login(data: AuthResponse) {
      const { store } = useAuthCookie();
      store(data.username, data.userId, data.token, data.email);
      // this.username = data.username;
      // this.userId = data.userId;
      // this.token = data.token;
      // this.email = data.email;
    },
    /**
     * 退出登录
     */
    logout() {
      const { clear } = useAuthCookie();
      this.username = null;
      this.userId = null;
      this.token = null;
      this.token = null;
    },
  },
});
