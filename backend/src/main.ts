import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // https://docs.nestjs.com/security/cors
  const app = await NestFactory.create(AppModule, { cors: true });
  // Global prefix
  // https://docs.nestjs.com/faq/global-prefix
  app.setGlobalPrefix('api/uni-md');
  // http://localhost:3002/
  await app.listen(3002);
}
bootstrap();
