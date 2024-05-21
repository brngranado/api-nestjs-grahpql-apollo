import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationStrategy } from './AuthenticationStrategy';
import { AuthenticationService } from '../authentication.service';
import { AuthService } from './Auth.service';

@Injectable()
export class JwtAuthenticationStrategy implements AuthenticationStrategy {
  constructor(private readonly authService: AuthService) {}
  async authenticate(request: Request): Promise<any> {
    const token = request.headers['authorization'];
    const user = await this.authService.verifyToken(token);
    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }
    return user;
  }
}
