import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerMiddleware } from './middleware/logger';
import { AuthGuard } from './server/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import * as compression from 'compression';
import { HttpResponse } from './interceptors/http_response';
import { HttpExceptionFilter } from './exception_filters/http-exception.filter';
import { MongooseExceptionFilter } from './exception_filters/mongoose-exception.filter';

async function bootstrap() {
  // https://docs.nestjs.com/security/cors
  const app = await NestFactory.create(AppModule, { cors: true });
  // Global prefix
  // https://docs.nestjs.com/faq/global-prefix
  app.setGlobalPrefix('/uni-md/api');
  // 接口版本控制
  // app.setGlobalPrefix('/uni-md/api/v0');
  // TODO 后续如何获取该全局前缀
  // 错误 await app.getUrl()

  // Logger 中间件
  app.use(new LoggerMiddleware().use);

  // use a global-scoped exception filter
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new MongooseExceptionFilter());

  // 文件压缩
  // https://docs.nestjs.com/techniques/compression
  app.use(compression({ encodings: ['gzip', 'deflate'] }));

  // 全局路由守卫
  app.useGlobalGuards(new AuthGuard(new JwtService(), new Reflector()));

  // 全局响应拦截器
  app.useGlobalInterceptors(new HttpResponse());

  // swagger
  const config = new DocumentBuilder()
    .setTitle('uni-md')
    .setDescription('uni-md API documents')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // 可从 http://localhost:3002/swagger 访问 swagger 文档
  SwaggerModule.setup('swagger', app, document);
  // swagger end

  // http://localhost:3002/
  await app.listen(process.env.PORT || 3002); // 指定端口

  console.log(`Nest Application is running on: ${await app.getUrl()}`);
}

bootstrap();
