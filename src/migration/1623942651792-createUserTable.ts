import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUserTable1623942651792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '60',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'permissions',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'last_login',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'nick_name',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'first_name',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'username',
            type: 'varchar',
            length: '60',
            isNullable: true,
          },
          {
            name: 'address',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'secondary_address',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'job_position',
            type: 'varchar',
            length: '60',
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'secondary_phone',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'secondary_email',
            type: 'varchar',
            length: '60',
            isNullable: true,
          },
          {
            name: 'gender',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'about',
            type: 'varchar',
            length: '400',
            isNullable: true,
          },
          {
            name: 'profile_image',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'active',
            type: 'boolean',
            default: false,
          },
          {
            name: 'verified',
            type: 'boolean',
            default: false,
          },
          {
            name: 'super_user',
            type: 'boolean',
            default: false,
          },
          {
            name: 'manage_supers',
            type: 'boolean',
            default: false,
          },
          {
            name: 'super_account',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
