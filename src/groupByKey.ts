type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // const group = {} as GroupsMap<T>;

  const group = items.reduce((books: GroupsMap<T>, book) => {
    const value = String(book[key]);

    if (!books[value]) {
      // eslint-disable-next-line no-param-reassign
      books[value] = [];
    }

    books[value].push(book);

    return books;
  }, {});

  return group;
}
