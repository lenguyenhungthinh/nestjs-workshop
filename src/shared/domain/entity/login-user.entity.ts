import { Entity } from './entity.interface';

export class LoginUser implements Entity {
  id: number;
  email: string;
  displayName: string;
  isValid: boolean;

  constructor(init?: Partial<LoginUser>) {
    Object.assign(this, init);
  }

  equals(entity: Entity): boolean {
    if (!(entity instanceof LoginUser)) return false;

    return this.id === entity.id;
  }
}
