import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });

  // Global validation pipe to enforce DTO rules
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,         // Strip properties not in the DTO
      forbidNonWhitelisted: true, // Throw error on unknown properties
      transform: true,         // Automatically transform payloads to match DTO types
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
