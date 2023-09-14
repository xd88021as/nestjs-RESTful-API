export interface ShopData {
  name: string;
  localPhoneNumber?: string;
  mobilePhoneNumber?: string;
  introduce?: string;
}

export interface ShopFindManyParams {
  where: {
    userId?: number;
    skip: number;
    take: number;
  };
}

export interface ShopFindUniqueParams {
  where: {
    id?: number;
    uuid?: string;
    localPhoneNumber?: string;
  };
}

export interface UserShopData {
  shopId: number;
  userId: number;
}
