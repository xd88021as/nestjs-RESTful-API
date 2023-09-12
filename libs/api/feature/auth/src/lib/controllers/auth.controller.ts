import { Body, Controller, ForbiddenException, NotFoundException, Post } from '@nestjs/common';
import { UserService } from '@test/api/core/user';
import {
  AuthSignInByPhoneBodyDto,
  AuthSignInResponseDto,
  AuthSignUpByPhoneBodyDto,
} from '@test/shared/data-access/auth';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post('signIn/phone')
  async signInByPhone(@Body() body: AuthSignInByPhoneBodyDto): Promise<AuthSignInResponseDto> {
    const user = await this.userService.findUnique({ where: { phone: body.phone } });
    if (!user) {
      throw new NotFoundException('signIn');
    }
    const jwt = this.authService.generateJwt({ userUuid: user.uuid });
    return AuthSignInResponseDto.generate(jwt);
  }

  @Post('signUp/phone')
  async signUpByPhone(@Body() body: AuthSignUpByPhoneBodyDto): Promise<void> {
    const { phone, password } = body;
    const user = await this.userService.findUnique({ where: { phone } });
    if (user) {
      throw new ForbiddenException();
    }
    await this.userService.create({ phone, password });
  }
}
