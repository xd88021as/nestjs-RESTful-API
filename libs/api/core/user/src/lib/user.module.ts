import { Module } from '@nestjs/common';
import { PrismaModule } from '@test/api/common/prisma';
import { ObjectModule } from '@test/api/util/object';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [ObjectModule, PrismaModule],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
