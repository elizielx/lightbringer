import { Module } from '@nestjs/common';
import {
  ClientGrpcProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { join } from 'path';
import { UsersController } from './user.controller';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'UsersServiceClient',
      useFactory: (): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: '0.0.0.0:50051',
            package: 'user',
            protoPath: join(__dirname, './assets/_proto/user.proto'),
            loader: {
              keepCase: true,
              enums: String,
              oneofs: true,
              arrays: true,
            },
          },
        });
      },
    },
  ],
})
export class UsersModule {}
