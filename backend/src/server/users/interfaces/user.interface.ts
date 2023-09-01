import { Document } from 'mongoose';
import { TNormalLogin, TSocialLogin } from 'types';

export interface User extends Document {
  username?: string;
  email?: string;
  phone?: string;
  // 使用 AES 加密存储
  password?: string;
  // 用户唯一标识
  userId: string;
  // 用户登录类型
  userType: TNormalLogin & TSocialLogin;
}
