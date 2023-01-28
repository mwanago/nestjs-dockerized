import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setupSwagger } from "./config/swagger/swagger.config";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn', 'debug'],
    cors: true,
  });
  const globalPrefix = 'v1';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3001;
  app.enableCors({
    origin: '*', // TODO: change this if necessary
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true,
  });
  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
  );
  const configService = app.get(ConfigService);

  app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
  );
  app.use(cookieParser());
  app.use(compression());
  app.useStaticAssets(join(__dirname, '..', 'client/assets'));
  app.setBaseViewsDir(join(__dirname, '..', 'client'));
  app.setViewEngine('ejs');

  setupSwagger(app);
  await app.listen(configService.get('PORT'));
}
void bootstrap();
