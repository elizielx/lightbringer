import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  controllers: [UsersController],
  providers: [{ provide: 'UsersService', useClass: UsersService }],
})
export class UsersModule {}
