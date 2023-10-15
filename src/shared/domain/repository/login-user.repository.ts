//interface for login user repo.
import { LoginUser } from '../entity/login-user.entity';
export const LoginUserRepositoryName = 'LoginUserRepository.Interface';

export interface LoginUserRepository {
  save(entity: LoginUser): Promise<boolean>;
  findByEmail(email: string): Promise<LoginUser>;
  findOneBy(conditions: { [key: string]: any }): Promise<LoginUser>;
}
