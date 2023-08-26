import { CookieType } from "types/api";

export const useAuthCookie = (
  { authUsername, authUseId, authToken, authEmail } = {
    authUsername: process.env.UNI_MD_USERNAME || "uni_md_username",
    authUseId: process.env.UNI_MD_USERID || "uni_md_userId",
    authToken: process.env.UNI_MD_TOKEN || "uni_md_token",
    authEmail: process.env.UNI_MD_EMAIL || "uni_md_email",
  }
) => {
  const username = useCookie<CookieType>(authUsername);
  const userId = useCookie<CookieType>(authUseId);
  const token = useCookie<CookieType>(authToken);
  const email = useCookie<CookieType>(authEmail);

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
