type GroupsMap<T> = Record<string, T[]>;

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKey = String(item[key]);

    if (!groupItems[groupKey]) {
      groupItems[groupKey] = [];
    }
    groupItems[groupKey].push(item);
  });

  return groupItems;
}
