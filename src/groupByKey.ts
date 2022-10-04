type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    groupedItems[`${item[key]}`] = [];
  });

  items.forEach((item: T) => {
    groupedItems[`${item[key]}`].push(item);
  });

  return groupedItems;
}
