/**
 * 统一响应类型
 */
export interface UnifiedResponse<T> {
  code: number;
  message: string;
  data: T;
}

/**
 * 登录方式
 */
export type LoginType = 'username' | 'phone' | 'email';

// export type Login =
//   | ({ type: "username" } & LoginWithUsername)
//   | ({ type: "phone" } & LoginWithPhone)
//   | ({ type: "email" } & LoginWithEmail);

export type LoginUnion = {
  [K in LoginType]: { type: K; password: string } & Record<K, string>;
};

export type Login = LoginUnion[keyof LoginUnion];

export type JWT = {
  sub: string;
} & Login;
