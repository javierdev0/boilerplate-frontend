/* eslint-disable no-console */
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Ingrese aquí el título de su aplicación')
    .setDescription('Ingrese aquí la descripción de su aplicación')
    .setVersion('1.0.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
      name: 'Authorization',
      description: 'Ingrese su token JWT en el encabezado de autorización con el formato "<token>".'
    })
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true
    }
  })
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(4000)

  if (process.env.NODE_ENV !== 'production') {
    console.table({
      ENV: process.env.NODE_ENV,

      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME,
      SSL_REJECT_UNAUTHORIZED: process.env.SSL_REJECT_UNAUTHORIZED,
      AUTO_LOAD_ENTITIES: process.env.AUTO_LOAD_ENTITIES,
      SYNCHRONIZE: process.env.SYNCHRONIZE,
      DEFAULT_LIMIT: process.env.DEFAULT_LIMIT,

      REGION: process.env.REGION,
      ACCESS_KEY: process.env.AWS_ACCESS_KEY_ID,
      SECRET_ACCESS: process.env.AWS_SECRET_ACCESS_KEY,

      USER_POOL_ID: process.env.USER_POOL_ID,
      USER_POOL_WEB_CLIENT_ID: process.env.USER_POOL_WEB_CLIENT_ID,
      AUTH_IDENTITY: process.env.AUTH_IDENTITY,
      COGNITO_IDENTITY_POOL: process.env.COGNITO_IDENTITY_POOL,

      MAIL_FROM: process.env.MAIL_FROM,
      MAIL_HOST: process.env.MAIL_HOST,
      MAIL_PASSWORD: process.env.MAIL_PASSWORD,
      MAIL_USER: process.env.MAIL_USER,

      S3_BUCKET_NAME: process.env.S3_BUCKET_NAME
    })
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap()
