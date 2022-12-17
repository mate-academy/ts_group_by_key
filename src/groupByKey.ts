type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedBooks: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const objectKey: string = String(item[key]);

    if (!sortedBooks[objectKey]) {
      sortedBooks[objectKey] = [];
    }

    sortedBooks[objectKey].push(item);
  });

  return sortedBooks;
}
