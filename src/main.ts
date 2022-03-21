import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Todo Crud')
    .setDescription('The todo API description')
    .setVersion('1.0')
    .addTag('todo')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/tasks', app, document);

  await app.listen(3000);
}
bootstrap();
