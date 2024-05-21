import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtAuthenticationStrategy } from './auth/AuthenticationJwt';
import { BasicAuthenticationStrategy } from './auth/BasicAuthentication';
import { User } from './entities/user.entity';
import { AuthenticationStrategy } from './auth/AuthenticationStrategy';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('AuthenticationStrategyJWT')
    private readonly jwtStrategy: JwtAuthenticationStrategy,
    @Inject('AuthenticationStrategyBasic')
    private readonly basicStrategy: BasicAuthenticationStrategy,
  ) {}

  authenticateUser(request: Request) {
    if (!request?.headers || !request?.headers === undefined) {
      return false;
    }
    const authenticationStrategy = this.getAuthenticationStrategy(request);
    return authenticationStrategy.authenticate(request);
  }

  private getAuthenticationStrategy(request: Request): AuthenticationStrategy {
    const authorizationHeader = request.headers['authorization'];

    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
      return this.jwtStrategy;
    } else if (
      authorizationHeader &&
      authorizationHeader.startsWith('Basic ')
    ) {
      return this.basicStrategy;
    }

    throw new UnauthorizedException('Invalid authentication method');
  }
}
