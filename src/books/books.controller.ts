import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly service: BooksService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
