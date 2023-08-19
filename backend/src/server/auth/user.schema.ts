import { Schema } from 'mongoose';

export const userSchema: Schema = new Schema({
  // 用户名
  name: { type: String, required: true },
  // 用户邮箱
  email: { type: String, required: true, unique: true },
  // 用户头像
  avatar_url: { type: String, required: true },
});
