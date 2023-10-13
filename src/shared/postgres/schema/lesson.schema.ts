import { Lesson } from 'src/shared/domain/entity/lesson.entity';
import { EntitySchema } from 'typeorm';
import { BaseSchema } from './base.schema';

const LessonSchema = new EntitySchema<Lesson>({
  name: 'Lesson',
  tableName: 'LESSON',
  target: Lesson,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: 'increment',
    },
    name: {
      type: String,
    },
    tag: {
      type: String,
    },
    content: {
      type: 'text',
    },
    isValid: {
      type: Boolean,
      name: 'is_valid',
    },
    ...BaseSchema,
  },
});

export default LessonSchema;
