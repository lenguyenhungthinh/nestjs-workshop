import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getHello(): Promise<object> {
    return await this.bookService.getHello();
  }
}
