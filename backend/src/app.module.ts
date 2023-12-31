import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 引入 Mongoose
import { MongooseModule } from '@nestjs/mongoose';
// import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

import { FileModule } from './server/file/file.module';
import { AuthModule } from './server/auth/auth.module';
import { UsersModule } from './server/users/users.module';
import { HealthModule } from './server/health/health.module';

@Module({
  imports: [
    // localhost 不行, 需使用 127.0.0.1 或 0.0.0.1
    // ❌ MongooseModule.forRoot('mongodb://localhost:27017/test'),
    // 数据库地址 mongodb://127.0.0.1:27017
    // 数据库名称 test

    MongooseModule.forRoot(
      process.env.MONGO_DATABASE_URL || 'mongodb://127.0.0.1:27017/uni-md',
    ),
    // HttpModule,
    // ConfigModule,
    ConfigModule.forRoot({
      load: [configuration],
      // envFilePath: ['/env', 'env/.env.development', 'env/.env.production'],
      envFilePath: [
        'env/.env.shared',
        process.env.NODE_ENV === 'development'
          ? 'env/.env.development'
          : 'env/.env.production',
      ],
      isGlobal: true, // https://docs.nestjs.com/techniques/configuration#use-module-globally
      cache: true, // https://docs.nestjs.com/techniques/configuration#cache-environment-variables
      expandVariables: true, // https://docs.nestjs.com/techniques/configuration#expandable-variables
    }),

    FileModule,
    AuthModule,
    UsersModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
