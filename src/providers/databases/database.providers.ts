import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'NESTJS_MONGODB_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('myMongoDBConnectionHere'),
  },
];
