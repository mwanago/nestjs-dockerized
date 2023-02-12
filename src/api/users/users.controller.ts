import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import RequestWithUser from '../../security/authentication/requestWithUser.interface';

@ApiTags('Users Controller')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUser(@Req() request: RequestWithUser) {
    return request.user;
  }
}
