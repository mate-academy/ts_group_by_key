type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key];

    if (!groupedItems[value as string]) {
      groupedItems[value as string] = [];
    }

    groupedItems[value as string].push(item);
  });

  return groupedItems;
}
