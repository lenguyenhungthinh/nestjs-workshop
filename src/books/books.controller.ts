import { Controller, Get, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  @UseGuards(AuthGuard('basic'))
  async getHello(): Promise<object> {
    return await this.bookService.getHello();
  }
}
