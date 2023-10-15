import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresModule } from 'src/shared/postgres/postgres.module';
import { LessonRepositoryImpl } from 'src/shared/postgres/repository/lesson.repository';
import LessonSchema from 'src/shared/postgres/schema/lesson.schema';
import { LessonRepositoryName } from './lesson.repository';
import LoginUserSchema from 'src/shared/postgres/schema/login-user.schema';
import { LoginUserRepositoryName } from './login-user.repository';
import { LoginUserRepositoryImpl } from 'src/shared/postgres/repository/login-user.repository';

@Global()
@Module({
  imports: [
    PostgresModule,
    TypeOrmModule.forFeature(
      [
        //schema here
        LessonSchema,
        LoginUserSchema,
      ],
      'INTERNAL_POSTGRES_CONNECTION',
    ),
  ],
  providers: [
    {
      provide: LessonRepositoryName,
      useClass: LessonRepositoryImpl,
    },
    {
      provide: LoginUserRepositoryName,
      useClass: LoginUserRepositoryImpl,
    },
  ],
  exports: [LessonRepositoryName, LoginUserRepositoryName, TypeOrmModule],
})
export class RepositoryModule {}
