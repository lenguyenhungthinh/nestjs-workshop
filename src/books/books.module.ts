import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BooksService } from './books.service';
import { RepositoryModule } from 'src/shared/domain/repository/repository.module';
import { PostgresModule } from 'src/shared/postgres/postgres.module';

@Module({
  imports: [RepositoryModule, PostgresModule],
  controllers: [BookController],
  providers: [BooksService],
})
export class BooksModule {}
