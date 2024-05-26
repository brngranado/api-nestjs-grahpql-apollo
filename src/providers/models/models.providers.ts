import { Connection } from 'mongoose';
import { UserSchema } from 'src/users/schemas/user.schema';

export const modelProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['NESTJS_MONGODB_CONNECTION'],
  },
];
