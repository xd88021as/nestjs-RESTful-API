export interface UserFindManyParams {
  where: {
    jobType?: string;
    createdFrom?: Date;
    createdTo?: Date;
    skip: number;
    take: number;
  };
}

export interface UserFindUniqueParams {
  where: {
    id: number;
  };
}
