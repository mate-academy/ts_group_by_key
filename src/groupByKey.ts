type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const returnKey = `${item[key]}`;

    if (sortedItems[returnKey]) {
      sortedItems[returnKey].push(item);
    } else {
      sortedItems[returnKey] = [item];
    }
  });

  return sortedItems;
}
