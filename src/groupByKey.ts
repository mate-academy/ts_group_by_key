type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const currKey = String(item[key]);

    if (!groupedItems[currKey]) {
      groupedItems[currKey] = [];
    }

    groupedItems[currKey].push(item);
  });

  return groupedItems;
}
