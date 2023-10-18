//write UT for publisher controller
// import { Test, TestingModule } from '@nestjs/testing';
import { TestingModule, Test } from '@nestjs/testing';
import { PublisherController } from './publishers.controller';
import { PublishersService } from './publishers.service';
import { DeepMocked, createMock } from '@golevelup/ts-jest';

describe('PublisherController', () => {
  let controller: PublisherController;
  let mockService: DeepMocked<PublishersService>;

  beforeEach(async () => {
    mockService = createMock<PublishersService>();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublisherController],
      providers: [
        {
          provide: PublishersService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<PublisherController>(PublisherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "Hello World! Publishers Service"', () => {
    mockService.getHello.mockReturnValue('Hello World! Publishers Service2');
    expect(controller.getHello()).toBe('Hello World! Publishers Service2');
  });
});
