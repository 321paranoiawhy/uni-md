/**
 * 统一响应类型
 */
export interface UnifiedResponse<T> {
  code: number;
  message: string;
  data: T;
}
