import { PartialType, PickType } from '@nestjs/mapped-types';
import { UserBaseDto } from '@test/shared/data-access/base';

export class UserFindUniqueParamDto extends PartialType(PickType(UserBaseDto, ['uuid'] as const)) {}
