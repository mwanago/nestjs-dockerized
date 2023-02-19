import { Test } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AuthenticationService } from './authentication.service';
import { UsersService } from '../users/users.service';
import User from '../users/user.entity';
import { JwtModule } from '@nestjs/jwt';

describe('The AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
          secretOrPrivateKey: 'Secret key',
        }),
      ],
      providers: [
        UsersService,
        AuthenticationService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();
    authenticationService = await module.get(AuthenticationService);
  });
  describe('when creating a cookie', () => {
    it('should return a string', () => {
      const userId = 1;
      expect(
        typeof authenticationService.getCookieWithJwtToken(userId),
      ).toEqual('string');
    });
  });
});
