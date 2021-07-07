import { Users } from '../entities';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserData } from 'src/types';
import * as moment from 'moment';
import * as _ from 'lodash';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  async getOneUserByEmail(email: string): Promise<Users | undefined> {
    const account = await this.findOne({
      where: {
        email,
        active: true,
        verified: true,
      },
    });
    return account;
  }

  async getUserByEmail(email: string): Promise<Users | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  async getUserByNickName(nickName: string): Promise<Users | undefined> {
    const user = await this.findOne({
      where: {
        nickName,
      },
    });
    return user;
  }

  async getUserById(id: number): Promise<Users | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });
    return user;
  }

  async createUser(data: CreateUserData): Promise<Users | undefined> {
    const user = new Users();
    user.email = data.email;
    user.password = data.password;
    user.nickName = data.nickname;
    const newUser = await this.save(user);
    return newUser;
  }
}
