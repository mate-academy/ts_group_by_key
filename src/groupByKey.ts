type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupedKey = <string>item[key];

    if (!groupedItems[groupedKey]) {
      groupedItems[groupedKey] = [];
    }

    groupedItems[groupedKey].push(item);
  });

  return groupedItems;
}
