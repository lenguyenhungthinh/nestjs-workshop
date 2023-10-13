import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { optionsFactory } from './config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: 'INTERNAL_POSTGRES_CONNECTION',
      useFactory: optionsFactory,
      inject: [ConfigService],
    }),
  ],
})
export class PostgresModule {}
