import { SetMetadata } from '@nestjs/common';
import { IdentityOwner } from '../interfaces/identity-owners.interface';

export const SetIdentityOwners = (...identityOwners: IdentityOwner[]) =>
  SetMetadata('identityOwners', identityOwners);
