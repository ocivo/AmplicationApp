import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookWhereInput = {
  bookName?: StringNullableFilter;
  id?: StringFilter;
};
