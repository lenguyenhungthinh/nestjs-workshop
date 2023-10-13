import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresModule } from 'src/shared/postgres/postgres.module';
import { LessonRepositoryImpl } from 'src/shared/postgres/repository/lesson.repository';
import LessonSchema from 'src/shared/postgres/schema/lesson.schema';
import { LessonRepositoryName } from './lesson.repository';

@Global()
@Module({
  imports: [
    PostgresModule,
    TypeOrmModule.forFeature(
      [
        //schema here
        LessonSchema,
      ],
      'INTERNAL_POSTGRES_CONNECTION',
    ),
  ],
  providers: [
    {
      provide: LessonRepositoryName,
      useClass: LessonRepositoryImpl,
    },
  ],
  exports: [LessonRepositoryName, TypeOrmModule],
})
export class RepositoryModule {}
