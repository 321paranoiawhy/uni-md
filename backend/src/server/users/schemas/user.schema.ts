import * as mongoose from 'mongoose';

// export const UserSchema = new mongoose.Schema<User>();
export const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,
  // 使用 AES 加密存储
  password: String,
  // 用户唯一标识
  userId: String,
  // 用户登录类型
  userType: { type: String, required: true },
});
