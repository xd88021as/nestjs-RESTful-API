import { Injectable } from '@nestjs/common';
import { ObjectService } from '@test/api/util/object';
import { UserFindManyParams, UserFindUniqueParams } from '../interfaces/user.interface';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly objectService: ObjectService,
    private readonly userRepository: UserRepository
  ) {}

  async findMany(params: UserFindManyParams) {
    const users = await this.userRepository.findMany(params);
    return users;
  }

  async findUnique(params: UserFindUniqueParams) {
    if (this.objectService.isAllNullOrUndefined(params)) {
      return null;
    }
    const user = await this.userRepository.findUnique(params);
    return user;
  }

  async toISO(date?: Date) {
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
    const offsetMilliseconds = 8 * 60 * 60 * 1000;
    return date
      ? new Date(
          isoRegex.test(`${date}`)
            ? new Date(date).getTime() - offsetMilliseconds
            : new Date(date).getTime()
        )
      : undefined;
  }
}
