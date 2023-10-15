import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BooksService } from './books.service';
import { RepositoryModule } from 'src/shared/domain/repository/repository.module';
import { PostgresModule } from 'src/shared/postgres/postgres.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [RepositoryModule, PostgresModule, PassportModule, AuthModule],
  controllers: [BookController],
  providers: [BooksService],
})
export class BooksModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AuthMiddleware).forRoutes({
  //     path: '*',
  //     method: RequestMethod.ALL,
  //   });
  // }
}
