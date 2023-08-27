import { defineStore } from "pinia";

import { AuthResponse } from "../types/api";

export const useAuthStore = defineStore("auth", {
  state: (): Partial<AuthResponse> => {
    const { username, userId, token, email, store, clear } = useAuthCookie();

    return {
      username: username.value,
      userId: userId.value,
      token: token.value,
      email: email.value,
    };
  },
  actions: {
    /**
     * 登录
     * @param data 后端返回的用户登录信息
     */
    login(data: Partial<AuthResponse>) {
      const { store } = useAuthCookie();
      store(data.username, data.userId, data.token, data.email);
    },
    /**
     * 退出登录
     */
    logout() {
      const { clear } = useAuthCookie();
      clear();
    },
  },
});
