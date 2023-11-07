import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  bookName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
