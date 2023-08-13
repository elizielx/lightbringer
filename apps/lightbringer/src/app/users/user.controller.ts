import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { User, UsersServiceClient } from '../../assets/_proto/user';
import { Observable } from 'rxjs';

@Controller('users')
export class UsersController implements OnModuleInit {
  @Inject('UsersServiceClient')
  private readonly usersServiceClient: ClientGrpcProxy;

  private usersService: UsersServiceClient;

  onModuleInit() {
    this.usersService =
      this.usersServiceClient.getService<UsersServiceClient>('UsersService');
  }

  @Get()
  async getUsers() {
    const usersObservable: Observable<User> = this.usersService.findUser({});

    return new Promise((resolve) => {
      usersObservable.subscribe((user: User) => {
        resolve(user);
      });
    });
  }
}
