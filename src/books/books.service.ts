import { Inject, Injectable } from '@nestjs/common';
import { Lesson } from 'src/shared/domain/entity/lesson.entity';
import {
  LessonRepository,
  LessonRepositoryName,
} from 'src/shared/domain/repository/lesson.repository';

@Injectable()
export class BooksService {
  constructor(
    @Inject(LessonRepositoryName)
    private readonly lessonRepository: LessonRepository,
  ) {}
  async getHello(): Promise<Lesson> {
    const lesson = await this.lessonRepository.findValidBy(1);
    return lesson;
  }
}
