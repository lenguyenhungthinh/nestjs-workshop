import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from 'src/shared/domain/entity/lesson.entity';
import { LessonRepository } from 'src/shared/domain/repository/lesson.repository';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class LessonRepositoryImpl implements LessonRepository {
  constructor(
    @InjectRepository(Lesson, 'INTERNAL_POSTGRES_CONNECTION')
    private readonly repository: Repository<Lesson>,
  ) {}

  async findValidBy(id: number): Promise<Lesson> {
    return await this.repository.findOne({
      where: {
        id: Equal(id),
      },
    });
  }
  async save(entity: Lesson): Promise<boolean> {
    try {
      await this.repository.save(entity);
      return true;
    } catch (ex) {}

    return false;
  }
}
