//Help me write UT for PublisherService
import { Test, TestingModule } from '@nestjs/testing';
import { PublishersService } from './publishers.service';

describe('PublishersService', () => {
  let service: PublishersService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublishersService],
    }).compile();
    service = module.get<PublishersService>(PublishersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "Hello World! Publishers Service"', () => {
    expect(service.getHello()).toBe('Hello World! Publishers Service');
  });
});
