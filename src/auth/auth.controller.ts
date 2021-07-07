import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomLogger } from 'src/logger/logger';
import { LoginDto } from './dto/login.dto';
import { response } from 'src/utils';
import { UserError } from 'src/common/error';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authen')
@Controller('auth')
export class AuthController {
  private readonly logger = new CustomLogger(AuthController.name);

  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginData: LoginDto) {
    try {
      const user = await this.authService.validateUser(
        loginData.email,
        loginData.password,
      );

      if (!user) {
        throw 'Login error';
      }

      const result = await this.authService.login(user);
      return response.success(result);
    } catch (error) {
      this.logger.log(error);
      return response.error(error || 'Not found');
    }
  }
}
