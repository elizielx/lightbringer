import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './user.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(@Inject('UsersService') private readonly service: UsersService) {}

  @GrpcMethod('UsersService', 'findUser')
  async findUsers(): Promise<User> {
    return this.service.findUsers();
  }
}
