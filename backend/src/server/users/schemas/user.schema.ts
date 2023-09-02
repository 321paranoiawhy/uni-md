import * as mongoose from 'mongoose';
import { USER_TYPE } from 'src/config/constants';

export const UserSchema = new mongoose.Schema(
  {
    username: String, // String is shorthand for {type: String}
    email: String,
    phone: String,
    // 使用 AES 加密存储
    password: String,
    // 用户唯一标识
    // userId: String,
    // 用户登录类型 (必须)
    userType: {
      type: String,
      required: true,
      // userType 只能是以下类型
      enum: {
        values: USER_TYPE,
        message: '{VALUE} is not supported',
      },
    },
  },
  // versionKey
  // https://mongoosejs.com/docs/guide.html#versionKey
  // DO NOT disable versioning unless you know what you are doing.
  {
    // versionKey: false, // 不生成 __v
    // https://masteringjs.io/tutorials/mongoose/virtuals
    // virtuals: {
    //   userId: {
    //     get() {
    //       return this._id;
    //     },
    //   },
    // },
  },
);

// UserSchema.virtual('id').get(function () {
//   return this._id.toHexString();
// });

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.id;
    delete ret.__v;
  },
});

// (不可变) userId 即 _id (ObjectId), 只有 getter 无 setter
UserSchema.virtual('userId').get(function () {
  // In the getter function, `this` is the document.
  // Don't use arrow functions for virtual getters!
  return this._id;
});
