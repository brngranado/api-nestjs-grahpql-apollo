import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { JwtAuthenticationStrategy } from './auth/AuthenticationJwt';
import { BasicAuthenticationStrategy } from './auth/BasicAuthentication';
import { AuthService } from './auth/Auth.service';

@Module({
  providers: [
    AuthenticationService,
    AuthService,
    {
      provide: 'AuthenticationStrategyJWT',
      useClass: JwtAuthenticationStrategy,
    },
    {
      provide: 'AuthenticationStrategyBasic',
      useClass: BasicAuthenticationStrategy,
    },
  ],
  exports: [AuthenticationService, AuthService],
})
export class AuthenticationModule {}
