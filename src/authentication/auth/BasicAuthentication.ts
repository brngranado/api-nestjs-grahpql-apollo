import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationStrategy } from './AuthenticationStrategy';
import { AuthenticationService } from '../authentication.service';
import { AuthService } from './Auth.service';

@Injectable()
export class BasicAuthenticationStrategy implements AuthenticationStrategy {
  constructor(private readonly authService: AuthService) {}
  async authenticate(request: Request): Promise<any> {
    const authorizationHeader = request.headers['authorization'];
    if (!authorizationHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }
    const [username, password] = Buffer.from(
      authorizationHeader.split(' ')[1],
      'base64',
    )
      .toString()
      .split(':');
    const user = await this.authService.authenticateUserBasic(
      username,
      password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }
    return user;
  }
}
