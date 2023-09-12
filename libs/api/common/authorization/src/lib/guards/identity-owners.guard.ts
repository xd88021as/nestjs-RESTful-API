import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IdentityOwner } from '../interfaces/identity-owners.interface';

@Injectable()
export class IdentityOwnersGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const identityOwners = this.reflector.get<IdentityOwner[]>(
      'identityOwners',
      context.getHandler()
    );
    if (!identityOwners) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    return identityOwners.some(({ identity, reqField, uuidName }) => {
      if (reqField === 'body') {
        return request.user[`${identity}Uuid`] === request.body[uuidName];
      } else if (reqField === 'param') {
        return request.user[`${identity}Uuid`] === request.params[uuidName];
      }
    });
  }
}
