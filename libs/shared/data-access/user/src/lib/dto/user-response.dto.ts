import { PickType } from '@nestjs/mapped-types';
import { CommonResponseDto, UserBaseDto } from '@test/shared/data-access/base';
import { Exclude, plainToInstance } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class UserFindUniqueResponseDto extends PickType(CommonResponseDto, ['data']) {
  @ValidateNested()
  data: UserBaseDto;

  @Exclude()
  static generate(data: UserBaseDto): UserFindUniqueResponseDto {
    return plainToInstance(UserFindUniqueResponseDto, { data: UserBaseDto.generate(data) });
  }
}

export class UserFindManyResponseDto extends PickType(CommonResponseDto, ['data']) {
  @ValidateNested()
  data: UserBaseDto[];

  @Exclude()
  static generate(dataArray: UserBaseDto[]): UserFindManyResponseDto {
    return plainToInstance(UserFindManyResponseDto, {
      data: dataArray.map((data) => UserBaseDto.generate(data)),
    });
  }
}