// implement login-user repository
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUser } from 'src/shared/domain/entity/login-user.entity';
import { LoginUserRepository } from 'src/shared/domain/repository/login-user.repository';
import { Repository } from 'typeorm';

@Injectable()
export class LoginUserRepositoryImpl implements LoginUserRepository {
  constructor(
    @InjectRepository(LoginUser, 'INTERNAL_POSTGRES_CONNECTION')
    private readonly repository: Repository<LoginUser>,
  ) {}

  async save(entity: LoginUser): Promise<boolean> {
    const result = await this.repository.save(entity);
    return !!result;
  }

  async findByEmail(email: string): Promise<LoginUser> {
    return await this.repository.findOne({ where: { email } });
  }

  async findOneBy(conditions: { [key: string]: any }): Promise<LoginUser> {
    return await this.repository.findOne(conditions);
  }
}
