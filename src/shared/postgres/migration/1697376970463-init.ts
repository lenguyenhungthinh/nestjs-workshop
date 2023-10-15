import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1697376970463 implements MigrationInterface {
  name = 'Init1697376970463';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "LESSON" ("id" SERIAL NOT NULL,
      "name" CHARACTER VARYING NOT NULL,
      "tag" CHARACTER VARYING NOT NULL,
      "content" text NOT NULL,
      "is_valid" boolean NOT NULL,
      "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      CONSTRAINT "PK_a728769338e36bdd376e8f3bd34" PRIMARY KEY ("id"))
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "LESSON"`);
  }
}
