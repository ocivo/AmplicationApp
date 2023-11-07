import { Book as TBook } from "../api/book/Book";

export const BOOK_TITLE_FIELD = "bookName";

export const BookTitle = (record: TBook): string => {
  return record.bookName?.toString() || String(record.id);
};
