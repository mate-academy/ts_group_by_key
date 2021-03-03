'use strict';

export {};

interface Book {
  [key: string]: string | number;
}

interface BooksCollection<T> {
  [key: string] : T[];
}

export function groupByKey(array: Book[], key: string) {
  const grouped: BooksCollection<Book> = {};

  for (const book of array) {
    const newKey = book[key];

    grouped.hasOwnProperty(newKey)
      ? grouped[newKey].push(book)
      : grouped[newKey] = [book];
  }

  return grouped;
}
