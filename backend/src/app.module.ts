import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 引入 Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './server/file/file.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/test'),
    // 数据库地址 mongodb://127.0.0.1:27017
    // 数据库名称 test
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
