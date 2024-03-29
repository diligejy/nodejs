import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService); // ❶ ConfigService를 app.get()에 추가
  await app.listen(configService.get("SERVER_PORT"));  // ❷ configService 사용

  await app.listen(3000);
}
bootstrap();
