export interface UserData {
  phone?: string;
  email?: string;
  password: string;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  //
  genderId?: number;
}

export interface UserFindManyParams {
  where: {
    createdFrom?: Date;
    createdTo?: Date;
    genderName?: string;
    skip: number;
    take: number;
  };
}

export interface UserFindUniqueParams {
  where: {
    id?: number;
    uuid?: string;
    phone?: string;
    email?: string;
  };
}
