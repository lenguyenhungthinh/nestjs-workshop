import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserLogin1697382341132 implements MigrationInterface {
  name = 'AddUserLogin1697382341132';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `create table "LOGIN_USER" ("id" SERIAL not null,
      "email" character varying not null,
      "displayName" character varying not null,
      "is_valid" boolean not null,
      "created_at" TIMESTAMP with TIME zone not null default now(),
      "updated_at" TIMESTAMP with TIME zone not null default now(),
      constraint "PK_156569fc785b5b8b1ad467e024f" primary key ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "LOGIN_USER"`);
  }
}
