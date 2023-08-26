import { useRequest } from "../utils/request";
import { Login } from "../types/api";

/**
 * 使用用户名和密码登录
 * @param data
 * @returns
 */
export const login = (data: Login) => {
  return useRequest("/login");
};

// login({ type: "username", username: "username", password: "password" });
// login({ type: "phone", phone: "phone", password: "password" });
// login({ type: "email", email: "email", password: "password" });
