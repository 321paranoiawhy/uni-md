import { CookieType } from "types/index";

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

  const clear = () => {
    username.value = null;
    userId.value = null;
    token.value = null;
    email.value = null;
  };

  return { username, userId, token, email, store, clear };
};
