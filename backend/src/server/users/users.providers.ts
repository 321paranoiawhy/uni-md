import { Mongoose } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { DATABASE_CONNECTION, USER_MODEL } from 'src/config/constants';

export const usersProviders = [
  {
    provide: USER_MODEL,
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: [DATABASE_CONNECTION],
  },
];
