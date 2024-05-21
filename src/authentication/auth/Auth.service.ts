import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  verifyToken(token: string) {
    return {
      token: `This action returns all authentication with token ${token}`,
    };
  }

  authenticateUserBasic(user: any, password: string) {
    return {
      user: `This action returns all authentication with user ${user} and password ${password}`,
    };
  }
}
