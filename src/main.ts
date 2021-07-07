import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CustomLogger } from './logger/logger';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import { json } from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(CustomLogger));
  app.use(morgan('dev'));
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(json({ limit: '50mb' }));

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      skipMissingProperties: true,
    }),
  );

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Base Falcon nestjs document')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Falcon')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document', app, document);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT', 0);
  await app.listen(PORT || '3002');
}
bootstrap();
