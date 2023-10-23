type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((groupedItems, item) => {
    const keyValue = item[key];

    return {
      ...groupedItems,
      [keyValue]: [...(groupedItems[keyValue] || []), item],
    };
  }, {});
}
