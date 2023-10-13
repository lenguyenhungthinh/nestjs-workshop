import { Module } from '@nestjs/common';
import { PublisherController } from './publishers.controller';
import { PublishersService } from './publishers.service';

@Module({
  controllers: [PublisherController],
  providers: [PublishersService],
})
export class PublishersModule {}
