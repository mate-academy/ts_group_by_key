type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedBooks: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupByKeys = String(item[key]);

    if (!sortedBooks[groupByKeys]) {
      sortedBooks[groupByKeys] = [];
    }

    sortedBooks[groupByKeys].push(item);
  });

  return sortedBooks;
}
