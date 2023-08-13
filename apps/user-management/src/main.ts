/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { join } from 'path';

async function bootstrap() {
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
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

  app.listen();
}

bootstrap();
