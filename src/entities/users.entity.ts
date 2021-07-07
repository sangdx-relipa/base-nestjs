import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users', { schema: 'bitono' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'email', length: 60 })
  email: string;

  @Column('varchar', { name: 'password', nullable: true, length: 60 })
  password: string | null;

  @Column('text', { name: 'permissions', nullable: true })
  permissions: string | null;

  @Column('timestamp', { name: 'last_login', nullable: true })
  lastLogin: Date | null;

  @Column('varchar', { name: 'nick_name', nullable: true, length: 255 })
  nickName: string | null;

  @Column('varchar', { name: 'first_name', nullable: true, length: 255 })
  firstName: string | null;

  @Column('varchar', { name: 'last_name', nullable: true, length: 255 })
  lastName: string | null;

  @Column('varchar', { name: 'username', nullable: true, length: 60 })
  username: string | null;

  @Column('varchar', { name: 'address', nullable: true, length: 255 })
  address: string | null;

  @Column('varchar', { name: 'secondary_address', nullable: true, length: 255 })
  secondaryAddress: string | null;

  @Column('varchar', { name: 'job_position', nullable: true, length: 60 })
  jobPosition: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 15 })
  phone: string | null;

  @Column('varchar', { name: 'secondary_phone', nullable: true, length: 15 })
  secondaryPhone: string | null;

  @Column('varchar', { name: 'secondary_email', nullable: true, length: 60 })
  secondaryEmail: string | null;

  @Column('tinyint', { name: 'gender', nullable: true })
  gender: number | null;

  @Column('varchar', { name: 'about', nullable: true, length: 400 })
  about: string | null;

  @Column('varchar', { name: 'profile_image', length: 255 })
  profileImage: string;

  @Column('tinyint', { name: 'active', width: 1, default: () => "'0'" })
  active: boolean;

  @Column('tinyint', { name: 'verified', width: 1, default: () => "'0'" })
  verified: boolean;

  @Column({
    name: 'verify_token',
    type: 'text',
    nullable: true,
  })
  verifyToken: string;

  @Column('tinyint', { name: 'super_user', width: 1, default: () => "'0'" })
  superUser: boolean;

  @Column('tinyint', { name: 'manage_supers', width: 1, default: () => "'0'" })
  manageSupers: boolean;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @BeforeUpdate()
  updateDates() {
    this.updatedAt = new Date();
  }
}
