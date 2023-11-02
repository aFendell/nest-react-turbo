import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const PORT = configService.get('PORT');

  app.setGlobalPrefix('api');

  await app.listen(PORT || 3000);
}
bootstrap();
