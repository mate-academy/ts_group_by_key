type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) : GroupsMap<T> {
  const groupedBooks: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupByKeys = String(item[key]);

    if (!groupedBooks[groupByKeys]) {
      groupedBooks[groupByKeys] = [];
    }

    groupedBooks[groupByKeys].push(item);
  });

  return groupedBooks;
}
