import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this automatically removes any property not in the dto validation
      // forbidNonWhitelisted this property, if set to true, alongside whitelist true, will throw error incase additional properties were sent
    }),
  );
  await app.listen(3000);
}
bootstrap();
