import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PublishersModule } from './publishers/publishers.module';

@Module({
  imports: [BooksModule, PublishersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
