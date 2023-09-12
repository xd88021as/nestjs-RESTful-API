export interface IdentityOwner {
  identity: 'user';
  reqField: 'body' | 'param' | 'query';
  uuidName: string;
}
