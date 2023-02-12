import { Module } from '@nestjs/common';
import { PostsModule } from './api/blogs/posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from './database/database.module';
import { AuthenticationModule } from './security/authentication/authentication.module';
import { UsersModule } from './api/users/users.module';
import { CategoriesModule } from './api/blogs/categories/categories.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    CategoriesModule,
    PostsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_SCHEMA: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src/www'),
    }),
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
