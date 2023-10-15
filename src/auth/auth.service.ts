import { Inject, Injectable } from '@nestjs/common';
import { UserDetails } from './utils/types';
import {
  LoginUserRepositoryName,
  LoginUserRepository,
} from 'src/shared/domain/repository/login-user.repository';
import { LoginUser } from 'src/shared/domain/entity/login-user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(LoginUserRepositoryName)
    private readonly loginUserRepository: LoginUserRepository,
  ) {}

  async validateUser(details: UserDetails) {
    console.log('AuthService');
    console.log(details);
    const user = await this.loginUserRepository.findByEmail(details.email);
    console.log(user);
    if (user) return user;
    console.log('User not found. Creating...');
    const newUser = await this.loginUserRepository.save(
      new LoginUser({
        email: details.email,
        displayName: details.displayName,
      }),
    );
    return newUser;
  }

  async findUser(id: number) {
    const user = await this.loginUserRepository.findOneBy({ id: id });
    return user;
  }
}
