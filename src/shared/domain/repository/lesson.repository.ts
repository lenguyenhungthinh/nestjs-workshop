import { Lesson } from '../entity/lesson.entity';

export const LessonRepositoryName = 'LessonRepositoryName.Interface';

export interface LessonRepository {
  findValidBy(id: number): Promise<Lesson>;
  save(entity: Lesson): Promise<boolean>;
}
