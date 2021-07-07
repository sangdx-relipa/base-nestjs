import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Users,
      UserRepository
    ]),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class RepositoryModule {}
