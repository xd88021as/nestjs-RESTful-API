import { Injectable } from '@nestjs/common';

@Injectable()
export class ObjectService {
  isAllNullOrUndefined = (item: unknown) => {
    if (item === null || item === undefined) {
      return true;
    } else if (typeof item !== 'object' || Array.isArray(item)) {
      return false;
    }
    return !Object.values(item).some((v) => !this.isAllNullOrUndefined(v));
  };

  isAllNull = (item: unknown) => {
    if (item === null) {
      return true;
    } else if (typeof item !== 'object' || Array.isArray(item) || item === undefined) {
      return false;
    }
    return !Object.values(item).some((v) => !this.isAllNull(v));
  };

  isAllUndefined = (item: unknown) => {
    if (item === undefined) {
      return true;
    } else if (typeof item !== 'object' || Array.isArray(item) || item === null) {
      return false;
    }
    return !Object.values(item).some((v) => !this.isAllUndefined(v));
  };

  removeNullOrUndefined(obj: object) {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([k, v]) => k && v !== null && v !== undefined)
        .map(([k, v]) =>
          Array.isArray(v) ? [k, v] : [k, v === Object(v) ? this.removeNullOrUndefined(v) : v]
        )
    );
  }

  removeNull(obj: object) {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([k, v]) => k && v !== null)
        .map(([k, v]) =>
          Array.isArray(v) ? [k, v] : [k, v === Object(v) ? this.removeNull(v) : v]
        )
    );
  }

  removeUndefined(obj: object) {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([k, v]) => k && v !== undefined)
        .map(([k, v]) =>
          Array.isArray(v) ? [k, v] : [k, v === Object(v) ? this.removeUndefined(v) : v]
        )
    );
  }
}
