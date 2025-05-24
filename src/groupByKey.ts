type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedBooks: GroupsMap<T> = items.reduce((grouped, book) => {
    const groupKey = String(book[key]);

    grouped[groupKey] = grouped[groupKey] || [];
    grouped[groupKey].push(book);

    return grouped;
  }, {} as GroupsMap<T>);

  return groupedBooks;
}
