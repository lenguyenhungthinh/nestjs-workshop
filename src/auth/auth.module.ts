import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { BasicStrategy } from './strategies/basic.strategy';
import { AuthController } from './auth.controller';
import { RepositoryModule } from 'src/shared/domain/repository/repository.module';
import { PostgresModule } from 'src/shared/postgres/postgres.module';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { SessionSerializer } from './strategies/serializer';

@Module({
  imports: [RepositoryModule, PostgresModule, PassportModule, ConfigModule],
  providers: [
    BasicStrategy,
    GoogleStrategy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
