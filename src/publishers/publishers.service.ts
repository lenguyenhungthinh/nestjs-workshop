import { Injectable } from '@nestjs/common';

@Injectable()
export class PublishersService {
  getHello(): string {
    return 'Hello World! Publishers Service';
  }
}
