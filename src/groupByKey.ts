type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (!groupedItems[`${item[key]}`]) {
      groupedItems[`${item[key]}`] = [];
    }
    groupedItems[`${item[key]}`].push(item);
  });

  return groupedItems;
}
