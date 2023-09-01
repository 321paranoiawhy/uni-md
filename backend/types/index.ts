/**
 * 统一响应类型
 */
export interface UnifiedResponse<T> {
  code: number;
  message: string;
  data: T;
}

/**
 * 普通登录
 */
export type TNormalLogin = 'username' | 'phone' | 'email';

// export type Login =
//   | ({ type: "username" } & LoginWithUsername)
//   | ({ type: "phone" } & LoginWithPhone)
//   | ({ type: "email" } & LoginWithEmail);

export type LoginUnion = {
  [K in TNormalLogin]: { type: K; password: string } & Record<K, string>;
};

export type Login = LoginUnion[keyof LoginUnion];

export type JWT = {
  sub: string;
} & Login;

/**
 * 社交媒体登录
 */
export type TSocialLogin =
  | 'github'
  | 'google'
  | 'facebook'
  | 'bitbucket'
  | 'qq'
  | 'wechat';

export type User = {
  username?: string;
  email?: string;
  phone?: string;
  password?: string;
  userId: string;
  // 用户登录类型
  userType: TNormalLogin & TSocialLogin;
};
