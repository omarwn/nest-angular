import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from "path";
import * as e from "express"
import { LoggerMiddleware } from './logger.middleware';


async function bootstrap() {
  // const express = e();

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule, 
    // express
  );
  const DIST_FOLDER = path.join(process.cwd(), 'dist');
  app.useStaticAssets(DIST_FOLDER + '/public');
  // app.use(LoggerMiddleware)
  // app.enableCors();
  await app.listen(4000);
}
bootstrap();
