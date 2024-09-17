type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const sortedItems: GroupsMap<T> = {};

  items.forEach((item: string) => {
    if (!sortedItems[item[key]]) {
      sortedItems[item[key]] = [];
    }

    sortedItems[item[key]].push(item);
  });

  return sortedItems;
}
