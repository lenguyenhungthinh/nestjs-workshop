import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export function optionsFactory(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 54321,
    username: 'postgres',
    password: '123456',
    database: 'postgres2',
    schema: 'public',
    entities: [__dirname + '/schema/*{.ts,.js}'],
    synchronize: false,
    autoLoadEntities: true,
    migrationsRun: true,
    verboseRetryLog: true,
    connectTimeoutMS: 10000,
    maxQueryExecutionTime: 20000,
    poolSize: 10,
  };
}

// For cli migration
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 54321,
  username: 'postgres',
  password: '123456',
  database: 'postgres2',
  schema: 'public',
  entities: [__dirname + '/schema/*.ts'],
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/migration/*{.ts,.js}'],
});
