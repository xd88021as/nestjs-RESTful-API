import { PickType } from '@nestjs/mapped-types';
import { CommonResponseDto, ShopBaseDto } from '@test/shared/data-access/base';
import { Exclude, plainToInstance } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class ShopFindManyResponseDto extends PickType(CommonResponseDto, ['data']) {
  @ValidateNested()
  data: ShopBaseDto;

  @Exclude()
  static generate(dataArray: ShopBaseDto[]): ShopFindManyResponseDto {
    return plainToInstance(ShopFindManyResponseDto, {
      data: dataArray.map((data) => ShopBaseDto.generate(data)),
    });
  }
}

export class ShopFindUniqueResponseDto extends PickType(CommonResponseDto, ['data']) {
  @ValidateNested()
  data: ShopBaseDto;

  @Exclude()
  static generate(data: ShopBaseDto): ShopFindUniqueResponseDto {
    return plainToInstance(ShopFindUniqueResponseDto, {
      data: ShopBaseDto.generate(data),
    });
  }
}
