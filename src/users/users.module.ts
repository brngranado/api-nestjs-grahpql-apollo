import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { DatabaseModule } from 'src/providers/databases/database.module';
import { modelProviders } from 'src/providers/models/models.providers';

@Module({
  imports: [AuthenticationModule, DatabaseModule],
  providers: [UsersResolver, UsersService, ...modelProviders],
})
export class UsersModule {}
