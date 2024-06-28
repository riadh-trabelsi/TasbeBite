// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // Activer CORS avec la configuration par défaut
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('TasteBite')
    .setDescription('The TasteBite API description')
    .addApiKey({type:'apiKey', name:'authorization', in:"header"}, 'apiKey')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(7000);
}
bootstrap();