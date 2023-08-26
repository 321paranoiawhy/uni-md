export type CookieType = string | null | undefined;

/**
 * 后端统一响应格式
 */
export interface UnifiedResponse<T> {
  readonly code: number;
  readonly message: string;
  readonly data: T;
}

/**
 * 登录成功响应数据
 */
export interface AuthResponse {
  username: CookieType;
  userId: CookieType;
  token: CookieType;
  email: CookieType;
}

export interface LoginWithUsername {
  username: string;
  password: string;
}
export interface LoginWithPhone {
  phone: string;
  password: string;
}
export interface LoginWithEmail {
  email: string;
  password: string;
}

/**
 * 登录方式
 */
export type LoginType = "username" | "phone" | "email";

// export type Login =
//   | ({ type: "username" } & LoginWithUsername)
//   | ({ type: "phone" } & LoginWithPhone)
//   | ({ type: "email" } & LoginWithEmail);

export type LoginUnion = {
  [K in LoginType]: { type: K; password: string } & Record<K, string>;
};

export type Login = LoginUnion[keyof LoginUnion];
