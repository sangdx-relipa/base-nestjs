import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Users } from '../entities';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  async sendUserConfirmation(user: Users, token: string) {
    const url = `${this.configService.get(
      'CLIENT_URL',
    )}/user/verify?token=${token}&email=${user.email}`;
    const serviceName = this.configService.get('serviceName');

    await this.mailerService.sendMail({
      to: user.email,
      subject: `Welcome to 【${serviceName}】 Confirm your Email`,
      template: './signup',
      context: {
        url,
        serviceName,
      },
    });
  }

  async sendUserResetPassword(user: Users, token: string) {
    const url = `${this.configService.get(
      'CLIENT_URL',
    )}/user/reset-pass?token=${token}&email=${user.email}`;
    const serviceName = this.configService.get('serviceName');

    await this.mailerService.sendMail({
      to: user.email,
      subject: `【${serviceName}】Reset password email`,
      template: './resetpassword',
      context: {
        url,
        email: user.email,
        nickname: user.nickName,
        serviceName,
      },
    });
  }
}
