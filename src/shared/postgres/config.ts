import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function optionsFactory(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 54321,
    username: 'postgres',
    password: '123456',
    database: 'postgres',
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
