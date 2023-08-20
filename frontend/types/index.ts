export type CookieType = string | null;

export interface AuthResponse {
  username: CookieType;
  userId: CookieType;
  token: CookieType;
  email: CookieType;
}

/**
 * 后端统一响应格式
 */
export interface UnifiedResponse<T> {
  readonly code: number;
  readonly message: string;
  readonly data: T;
}
