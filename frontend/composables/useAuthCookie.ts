import { CookieType } from "types/api";

export const useAuthCookie = (
  { authUsername, authUseId, authToken, authEmail } = {
    authUsername: process.env.UNI_MD_USERNAME || "uni_md_username",
    authUseId: process.env.UNI_MD_USERID || "uni_md_userId",
    authToken: process.env.UNI_MD_TOKEN || "uni_md_token",
    authEmail: process.env.UNI_MD_EMAIL || "uni_md_email",
  }
) => {
  // https://ithelp.ithome.com.tw/articles/10304667

  // const maxAge = 60 * 60 * 24 * 7;
  // const expires = Math.floor(Date.now() / 1000) + maxAge;

  const currentDate = new Date();
  // 设置 cookie 7 天后过期
  const dueDate = new Date().setDate(currentDate.getDate() + 7);

  const username = useCookie<CookieType>(authUsername, {
    expires: new Date(dueDate),
  });
  const userId = useCookie<CookieType>(authUseId, {
    expires: new Date(dueDate),
  });
  const token = useCookie<CookieType>(authToken, {
    expires: new Date(dueDate),
  });
  const email = useCookie<CookieType>(authEmail, {
    expires: new Date(dueDate),
  });

  /**
   * 存储新用户信息
   * @param newUsername
   * @param newUserId
   * @param newToken
   * @param newEmail
   */
  const store = (
    newUsername: CookieType,
    newUserId: CookieType,
    newToken: CookieType,
    newEmail: CookieType
  ) => {
    username.value = newUsername;
    userId.value = newUserId;
    token.value = newToken;
    email.value = newEmail;
  };

  /**
   * 清除用户信息
   */
  const clear = () => {
    username.value = null;
    userId.value = null;
    token.value = null;
    email.value = null;
  };

  return { username, userId, token, email, store, clear };
};
