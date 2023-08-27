import { useRequest } from "../utils/request";
import { Login, UnifiedResponse } from "../types/api";

/**
 * 使用用户名和密码登录
 * @param data
 * @returns
 */
export const login = (data: Login) => {
  return useRequest<UnifiedResponse<string>>("/auth/login", { method: "POST" });
};

// login({ type: "username", username: "username", password: "password" });
// login({ type: "phone", phone: "phone", password: "password" });
// login({ type: "email", email: "email", password: "password" });
