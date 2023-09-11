import { Injectable } from '@nestjs/common';
import { CryptoService } from '@test/api/common/crypto';
import { ObjectService } from '@test/api/util/object';
import { UserData, UserFindManyParams, UserFindUniqueParams } from '../interfaces/user.interface';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly cryptoService: CryptoService,
    private readonly objectService: ObjectService,
    private readonly userRepository: UserRepository
  ) {}

  async create(data: UserData) {
    data.password = await this.cryptoService.hash(data.password);
    const user = await this.userRepository.create(data);
    return user;
  }

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
