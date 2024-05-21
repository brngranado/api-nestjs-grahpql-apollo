import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
  imports: [AuthenticationModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
