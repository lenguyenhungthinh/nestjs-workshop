import { Controller, Get } from '@nestjs/common';
import { PublishersService } from './publishers.service';

@Controller('publishers')
export class PublisherController {
  constructor(private readonly service: PublishersService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
