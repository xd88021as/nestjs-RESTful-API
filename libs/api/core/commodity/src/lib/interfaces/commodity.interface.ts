export interface CommodityData {
  name: string;
  unitCent: number;
  //
  shopId: number;
}

export interface CommodityFindManyParams {
  where: {
    name?: string;
    shopId?: number;
    skip: number;
    take: number;
  };
}

export interface CommodityFindUniqueParams {
  where: {
    id?: number;
    uuid?: string;
  };
}
