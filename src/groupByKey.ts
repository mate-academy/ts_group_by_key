type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupedKey = item[key];

    if (!groupedItems[groupedKey as string]) {
      groupedItems[groupedKey as string] = [];
    }

    groupedItems[groupedKey as string].push(item);
  });

  return groupedItems;
}
