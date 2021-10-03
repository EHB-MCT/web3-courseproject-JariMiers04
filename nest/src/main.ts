import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder().setTitle('Nest API').setDescription("this is just a description").setVersion('1.0').build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/doc',app, document);

  await app.listen(3000);
}
bootstrap();
