import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'NESTJS_MONGODB_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://user-api-nest:R4TftFZRN4Vb1bMu@atlascluster.5vrniwr.mongodb.net/',
      ),
  },
];
