// export type CookieType = string | null;

// export interface AuthResponse {
//   username: CookieType;
//   userId: CookieType;
//   token: CookieType;
//   email: CookieType;
// }

// /**
//  * 后端统一响应格式
//  */
// export interface UnifiedResponse<T> {
//   readonly code: number;
//   readonly message: string;
//   readonly data: T;
// }

// export interface LoginWithUsername {
//   username: string;
//   password: string;
// }
// export interface LoginWithEmail {
//   username: string;
//   password: string;
// }

// export type LoginType = "username" | "phone" | "email";

// export type newlogin = {
//   [K in LoginType]: { type: K; password: string } & Record<K, string>;
// };

// type a = newlogin[keyof newlogin];

// /**
//  * 登录方式
//  */
// // export enum LoginType {
// //   Username, // 用户名登录
// //   PhoneNumber, // 手机号登录
// //   Email, // 邮箱登录
// //   // Google, // Google 登录
// //   // GitHub, // GitHub 登录
// // }

// export type Login = LoginWithUsername | LoginWithEmail;
