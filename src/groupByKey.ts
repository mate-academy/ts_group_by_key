type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const groupItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemKey = item[key] as keyof GroupsMap<T>;

    if (itemKey !== null && itemKey !== undefined) {
      if (!groupItems[itemKey]) {
        groupItems[itemKey] = [];
      }

      groupItems[itemKey].push(item);
    }
  });

  return groupItems;
}
