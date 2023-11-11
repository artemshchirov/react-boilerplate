import { Role } from "@web/services/api/types/role";
import { SortEnum } from "@web/services/api/types/sort-type";
import { User } from "@web/services/api/types/user";

export type UserFilterType = {
  roles?: Role[];
};

export type UserSortType = {
  orderBy: keyof User;
  order: SortEnum;
};
