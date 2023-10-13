import { Entity } from './entity.interface';

export class Lesson implements Entity {
  id: number;
  name: string;
  tag: string;
  content: string;
  isValid: boolean;
  updatedAt: Date;
  createdAt: Date;

  constructor(init?: Partial<Lesson>) {
    Object.assign(this, init);
  }

  equals(entity: Entity): boolean {
    if (!(entity instanceof Lesson)) return false;

    return this.id === entity.id;
  }
}
