type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupedItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupedItemsKey = item[key];

    if (!groupedItems[groupedItemsKey]) {
      groupedItems[groupedItemsKey] = [];
    }
    groupedItems[groupedItemsKey].push(item);
  });

  return groupedItems;
}
