import { IntersectionType, PickType } from '@nestjs/mapped-types';
import { UserBaseDto } from '@test/shared/data-access/base';
import { Expose } from 'class-transformer';
import { MaxLength, MinLength } from 'class-validator';

class Password {
  @Expose()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}

export class AuthSignInByPhoneBodyDto extends IntersectionType(
  PickType(UserBaseDto, ['phone'] as const),
  Password
) {}

export class AuthSignUpByPhoneBodyDto extends IntersectionType(
  PickType(UserBaseDto, ['phone']),
  Password
) {}

export class AuthPasswordRecoveryByPhoneBodyDto extends IntersectionType(
  PickType(UserBaseDto, ['phone']),
  Password
) {}
