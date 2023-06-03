type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((books: GroupsMap<T>, book) => {
    const value = String(book[key]);
    const booksGrouped = { ...books };

    if (!books[value]) {
      booksGrouped[value] = [];
    }

    booksGrouped[value].push(book);

    return booksGrouped;
  }, {});
}
