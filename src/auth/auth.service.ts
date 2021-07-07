import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from '../entities';
import { compare } from 'bcryptjs';
import { UserError } from 'src/common/error';
import { Connection } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private connection: Connection,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      // const user = await this.usersService.findOneUserByEmail(email);
      const user = null;
      if (!user) {
        throw 'Not found user';
      }

      const validPass = await compare(pass, user.password);

      if (user && validPass) {
        const { ...result } = user;
        await queryRunner.commitTransaction();
        return result;
      }

      await queryRunner.commitTransaction();

      return null;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async login(user: Users) {
    const payload = {
      email: user.email,
      username: user.username,
      userId: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
