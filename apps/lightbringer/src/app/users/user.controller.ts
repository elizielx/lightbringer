import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController implements OnModuleInit {
  @Inject('UsersServiceClient')
  private readonly usersServiceClient: ClientGrpcProxy;

  private usersService;

  onModuleInit() {
    this.usersService = this.usersServiceClient.getService('UsersService');
  }

  @Get()
  async getUsers() {
    const users = await this.usersService.findUser({}).toPromise();
    console.log(users);
    return 'user';
  }
}
